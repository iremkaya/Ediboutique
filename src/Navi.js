import React, { Component } from 'react'
import CartSummary from './CartSummary'

export default class Navi extends Component {
    render() {
        return (
           <div class="row">
               <div class= "col-sm-2">
               <span class="navbar-brand">Edi Butik</span>
               </div>
               <div class= "col-sm-10" >
                   <div style={{float:'right'}}>
               <CartSummary cart={this.props.cart}></CartSummary>
               </div>
               </div>
                
            </div>
        )
    }
}
