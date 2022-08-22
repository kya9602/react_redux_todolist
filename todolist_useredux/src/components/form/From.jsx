import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
import nextId from "react-id-generator";

const Form=()=>{
    const id = nextId();

    const dispatch = useDispatch();
    
    const [todo, setTodo] = useState({
        id: 0,
        title: "",
        body: "",
        isDone: false,
      });

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        if(todo.title===""||todo.body==="") return;
        dispatch(addTodo({ ...todo ,id }));

        setTodo({
            id: 0,
            title: "",
            body: "",
            isDone: false,
        });
    }
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    //console.log(todo)
    
    return(
        <From onSubmit={onSubmitHandler}>   
            <StInputGroup>        
                <FormLabel>제목</FormLabel>
                <AddInput 
                type='text'
                name="title"
                value={todo.title}
                onChange={onChangeHandler} 
                />
                <FormLabel>내용</FormLabel>
                <AddInput 
                type='text'
                name="body"
                value={todo.body}
                onChange={onChangeHandler} 
                />
            </StInputGroup> 
            <AddBtn>추가하기</AddBtn>            
        </From>
    );

}
export default Form;

const From = styled.form`
    background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`
const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`

const AddInput = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
`

const AddBtn = styled.button`
    background-color: teal;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 140px;
`
const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;