import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
  }
  render() {
    const divStyle = {
      margin: "1px",
    };

    const spanStyle={
      float:"right",
      color:"white"
    }
    return (
      <div>
        <h3>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <div class="row col-sm-12">
          {this.props.products.map(product => (
            <div class="card col-sm-3" key={product.id} style={divStyle}>
              <div class="card-header">
                <Link to={"/saveproduct/" + product.id}>{product.productName}</Link>
              </div>
              <div class="card-body">
              <img class="img-fluid rounded shadow-lg" src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg"></img>
              <br></br>
              <span style={spanStyle}>{product.unitPrice}₺ </span>
                <br></br>
                <Button  style={spanStyle} color="success" onClick={() => this.addToCart(product)}>
                  Sepete Ekle
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
