import { SET_PRODUCT, SELECTED_PRODUCT } from "../types";

export const getData = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

export const getDataDetail = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
