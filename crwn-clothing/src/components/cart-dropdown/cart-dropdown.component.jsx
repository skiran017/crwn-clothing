import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-buton/custom-buton.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
