import { SET_PRODUCT, SELECTED_PRODUCT } from "../types";

const initialState = {
  products: [],
};

export const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }

    default:
      return state;
  }
};

export const reducerSelected = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
