import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { todoDone, todoRemove } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

const List = () =>{
    const todos = useSelector((state)=>state.todos.todos);
    console.log(todos)
    const dispatch = useDispatch();

    const onClickTodoDoneBtn = (id) =>{
      dispatch(todoDone(id));
    }
    const onClickTodoRemoveBtn = (id) =>{
      dispatch(todoRemove(id))
    }

    return(
        <ListContainer>
            <h2>Working.. 🔥</h2>
                <ListWrapper>                  

                {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoContainer key={todo.id}>
                
                  <div>상세보기</div>   
                

                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <TodoButtonSet>

                  <TodoButton
                    borderColor="red"
                    onClick={()=> onClickTodoRemoveBtn(todo.id)}
                  >
                    삭제하기
                  </TodoButton>
                  <TodoButton
                    borderColor="green"
                    onClick={()=> onClickTodoDoneBtn(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </TodoButton>
                </TodoButtonSet>

              </TodoContainer>
            );
          } else {
            return null;
          }
        })}

                </ListWrapper>
            <h2>Done..! 🎉</h2>
                <ListWrapper>

                {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoContainer key={todo.id}>    
                
                  <div>상세보기</div>   
                         
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <TodoButtonSet>
                  <TodoButton
                    borderColor="red"
                    onClick={()=> onClickTodoRemoveBtn(todo.id)}
                  >
                    삭제하기
                  </TodoButton>
                  <TodoButton
                    borderColor="green"
                    onClick={()=> onClickTodoDoneBtn(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </TodoButton>
                </TodoButtonSet>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}

                </ListWrapper>
        </ListContainer>
    );
}

export default List;

const ListContainer = styled.div``

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`
const TodoContainer = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`

const TodoButtonSet = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const TodoButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
