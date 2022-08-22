import React from "react";
//import { useSelector } from "react-redux";
import styled from "styled-components";

const Todo=()=>{
    //const {todos} = useSelector((state)=>state.todos);
    return (
        <TodoContainer>            
            
            {/* <div>
                {todos.mpa((todo)=>(                    
                    <div key={todo.id}>
                        {todo.title}
                        {todo.body}
                    </div>
                ))}
                
            </div> */}

        <TodoBtnSet>
            <TodoDelbtn>삭제</TodoDelbtn>
            <TodoCombtn>완료</TodoCombtn>
        </TodoBtnSet>

        </TodoContainer>

    );
  
}

export default Todo;

const TodoContainer = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`
const TodoBtnSet = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`
const TodoDelbtn = styled.button`
    border: 2px solid red;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
`
const TodoCombtn = styled.button`
    background-color: #fff;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
`