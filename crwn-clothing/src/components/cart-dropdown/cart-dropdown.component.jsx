import React from "react";

import CustomButton from "../custom-buton/custom-buton.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  </div>
);

export default CartDropDown;
