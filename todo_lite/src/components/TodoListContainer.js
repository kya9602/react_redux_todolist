import React from "react";
import { useSelector} from "react-redux";
import styled from "styled-components";


const TodoListContainer=()=>{
    const {todos} = useSelector((state)=>state.todos);
    return(
        <Container>
            {todos.map((todo)=>(
                <TodosContainer key={todo.id}>
                    {todo.title}
                </TodosContainer>
            ))}          
        </Container>
    )
}

export default TodoListContainer;

const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const TodosContainer = styled.div`
    border: 1px solid #2e8b57;
    border-radius: 8px;
    height: 100px;
    padding: 5px;
    width: 100px;
`