import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxsignup from "./modules/reduxsignup";
import reduxProduct from './modules/reduxProduct';
import reduxcart from "./modules/reduxcart";
// redux Devtool(디버깅이 편함)
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
const rootReducer = combineReducers({ reduxsignup, reduxcart, reduxProduct });
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const Store = createStore(rootReducer, enhancer);

export default Store;