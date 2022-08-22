import React from "react";
import styled from "styled-components";
import AddForm from "./components/addForm";
import TodoListContainer from "./components/TodoListContainer";

const StContainer = styled.section`
 max-width: 1440px;
  margin: 0 auto;
`;

const App = () =>{
  return(
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  )
}


export default App;