import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxsignup from "./modules/reduxsignup";
import reduxProduct from './modules/reduxProduct';
import reduxcart from "./modules/reduxcart"

const middlewares = [thunk];
const rootReducer = combineReducers({reduxsignup, reduxcart, reduxProduct});
const enhancer = applyMiddleware(...middlewares)

const Store = createStore(rootReducer, enhancer);

export default Store;