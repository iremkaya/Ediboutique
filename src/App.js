import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.css';
import './css/simple-line-icons.css';
import Product from './Product'
import Category from './Category'
import Navi from './Navi'


import React, { Component } from 'react'

export default class App extends Component {
  state = { currenctcategory: "", products: [] , cart:[]}

  changeCategory = category => { //bu kullanımın adı arrow Function
    this.setState({ currenctcategory: category.categoryName });
    this.getsProducts(category.id);
  }

  componentDidMount() {
  }

  getsProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }));

  }
  addToCart = (product) => {
    let newCart =this.state.cart;
    var addedItem= newCart.find(p=>p.product.id === product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
    newCart.push({product:product,quantity:'1'});
    }
    this.setState({cart:newCart});
}

  render() {
    let productFeature = { title: "Edi Butik" };
    let navigationFeature = { title: "KATEGORİ" };
    return (
      <div className="App">
          <div class="container">
            <div class="row">
             <Navi cart={this.state.cart}></Navi>
            </div>
                <div class="row">
                  <div class="col-xs-3">
                  </div>
                  <div class="col-xs-9">
                  </div>
                </div>
              </div>
        </div>
    )
  }
}

