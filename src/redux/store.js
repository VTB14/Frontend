import {combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  user: loginReducer,
  form: formReducer
});

let store = createStore(reducers);

export default store;