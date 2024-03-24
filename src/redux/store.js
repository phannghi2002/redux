import { createStore } from "redux";
import { reducerProducts, reducerSelected } from "./reducer";
import { combineReducers } from "redux";

const store = createStore(
  combineReducers({
    allProducts: reducerProducts,
    product: reducerSelected,
  }),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
