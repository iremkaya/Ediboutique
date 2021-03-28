import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom"
import { Button } from "bootstrap";

class CartSummary extends Component {
    
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
  }

  addFromCart(product) {
    this.props.actions.addFromCart(product);
  }

  renderEmpty() {
    return (
      <NavItem>
        <NavLink><i className="tim-icons icon-cart" />Sepetiniz boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav>
        <DropdownToggle nav caret>
       <i className="tim-icons icon-cart" /> ({this.props.cart.length})
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="success" onClick={()=>this.addFromCart(cartItem.product)}>{cartItem.quantity}  + </Badge>
              <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>-</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><span><Link to={"/cart"}>Sepete git</Link></span></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>


    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary);
