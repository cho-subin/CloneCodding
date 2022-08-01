import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxsignup from "./modules/reduxsignup";
import reduxProduct from './modules/reduxProduct';

const middlewares = [thunk];
const rootReducer = combineReducers({reduxsignup,reduxProduct});
const enhancer = applyMiddleware(...middlewares)

const Store = createStore(rootReducer, enhancer);

export default Store;