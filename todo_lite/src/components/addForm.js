import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const AddForm = () =>{
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(title==='') return; // 아무것도 입력하지 않으면 dispatch하지 않는다

        dispatch(addTodo({
            id:todos.length+1,
            title,
        }));
        setTitle('');
    };

    const [title,setTitle] =useState('');
    const todos = useSelector((state)=>state.todos.todos);
    const dispatch =useDispatch();

    

    return(
        <StFormContainer>
            <form onSubmit={onSubmitHandler}>
                <label>Todos의 제목을 입력하세요</label>
                <StInput 
                    type='text'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}                   
                    />
                <StButton>추가하기</StButton>      
                
            </form>
        </StFormContainer>

    )
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;