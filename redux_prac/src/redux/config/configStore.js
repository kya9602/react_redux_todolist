import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter"; //import해주기
import inpCounter from "../modules/inpCounter";

const rootReducer = combineReducers({
    counter:counter, //추가하기
    inpCounter:inpCounter,
});
const store = createStore(rootReducer);



export default store;