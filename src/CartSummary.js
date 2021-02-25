import React, { Component } from 'react'

export default class CartSummary extends Component {
    renderSummary(){
        return(
        <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                          <i class="fa fa-shopping-cart"></i> {this.props.cart.length}
                      </button>
                      <ul class="dropdown-menu">
                          {this.props.cart.map(element => (
                              <li class="dropdown-item" href="#" key={element.product.productName}>{element.product.productName}</li>
                          ))
                          }
                      </ul>
                  </div>
        )
    }
    render() {
        return (
<div>
    {this.props.cart.length > 0 ? this.renderSummary():<span> Sepetiniz Boş </span>}
</div>
           
        )
    }
}
