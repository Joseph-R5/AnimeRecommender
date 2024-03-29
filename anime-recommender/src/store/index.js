import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import { checkIfAnimeAlreadyExistsMiddleware } from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(checkIfAnimeAlreadyExistsMiddleware, thunk))
);

export default store;
