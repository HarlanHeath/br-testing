import { createStore, applyMiddleware, combineReducers } from "redux";
import detailsReducer from "../reducers/detailsReducer";
import promiseMiddleware from "redux-promise-middleware";

export default createStore(
  combineReducers({
    detailsReducer
  }),
  applyMiddleware(promiseMiddleware)
);
