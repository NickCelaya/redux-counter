import {createStore} from "redux";
import {combineReducers} from "redux"
import counter from "./ducks/counter";
import testReducer from "./ducks/testReducer";



export default createStore(combineReducers({counter, testReducer}));
//testReducer breaks the code when I pass ass a param.
//how do i use combine reducers or use import mulitple reducers to my app.js
