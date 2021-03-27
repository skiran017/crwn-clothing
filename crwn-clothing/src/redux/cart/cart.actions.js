import CartActionTypes from "./cart.types";

export const toggleCartHidden = (data) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: data,
});
