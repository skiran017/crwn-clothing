import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

const shopeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopeReducer;
