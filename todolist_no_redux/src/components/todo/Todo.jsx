import './style.css';
import React from "react";


function Todo({id, todo, onRemove ,TodoDone }) {
       

  return (
  <div className="TodoContainer" key={id}>
        <div>
            <h2>{todo.title}</h2>
            <div>{todo.body}</div>
        </div>
            <div className='TodobtnSet'>
                <button className='TodoDelbtn'onClick={() => onRemove(todo.id)}>삭제하기</button>
                <button className='TodoCombtn'onClick={() => TodoDone(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
            </div>
        </div>
  );
}

export default Todo;
