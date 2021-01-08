import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers";

let store;

export function configureStore() {
  // from redux, it requires two args
  store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}
