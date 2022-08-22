import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
//import inpCounter from "../modules/inpCounter";

const rootReducer = combineReducers({
    todos:todos,
});
const store = createStore(rootReducer);



export default store;