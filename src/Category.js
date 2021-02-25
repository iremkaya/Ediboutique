import React, { Component } from 'react'

export default class Category extends Component {
   state = {
            categories: [],
   }
   componentDidMount(){
       this.getCategories();
   }

   getCategories=()=>{
       fetch("http://localhost:3000/categories").then(response=>response.json()).then(data=> this.setState({categories:data}));
   }
    render() {
        return (
            <div>
                <h3> <b>{this.props.info.title}</b></h3>
                <ul class="list-group">
               {
                   this.state.categories.map(category => (
                      <li className={'list-group-item'+ (category.categoryName === this.props.currenctcategory? ' list-group-item-action active':'')} onClick={() => this.props.changeCategory(category)} class="list-group-item" key={category.id}>{category.categoryName}</li>
                   ))
               }
               </ul>
            </div>
        )
    }
}
