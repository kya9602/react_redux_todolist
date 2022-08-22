import React from "react";
//import styled from "styled-components";
import TodoList from "./components/pages/TodoList";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";


const App = () =>{
 return(
  <Provider store={store}>
   <TodoList />
   </Provider>
 )
}

export default App;
