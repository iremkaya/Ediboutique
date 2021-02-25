import React, { Component } from 'react'

export default class Product extends Component {
   
    render() {
        return (
            <div className="Product">
                <table class="table table-striped">
                    <thead  class="thead-dark">
                        <tr>
                        <th scope="col">
                            #
                     </th>
                        <th scope="col">
                            Product Name
                     </th>
                        <th scope="col">
                            Unit Price
                     </th >
                        <th scope="col">
                            Quantity Per Unit
                      </th>
                        <th scope="col">
                            Unit In Stock
                      </th>   
                      <th scope="col">
                           Add To Cart
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product) => (
                            <tr  key={product.id}>
                                 <td scope="row">
                                    {product.id}
                                </td>
                                <td scope="row">
                                    {product.productName}
                                </td>
                                <td scope="row">
                                    {product.unitPrice}
                                </td>
                                <td scope="row">
                                    {product.quantityPerUnit}
                                </td>
                                <td scope="row">
                                    {product.unitsInStock}
                                </td>
                                <td>
                                    <button class="btn btn-info" onClick={()=>this.props.addToCart(product)}> Add To Cart</button>
                                </td>
                            </tr>))

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
