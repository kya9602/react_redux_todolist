import './style.css';
import React, { useState } from "react";

function Form({ todos,setTodos}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodos = () =>{
      setTodos([...todos, {
          id: todos.length+1,
          title:title,
          body:body,
          isDone:false,
      }]);
      setTitle(''); // import 지우는거
      setBody(''); // import 지우는거
  }

  return (
    <div className="form">
        <div> 
            <div className='InputGrup'>
            <label className='FormLabel'>제목</label>
            <input className="AddInput" type='text' value={title}
                onChange={(event) => {
                    setTitle(event.target.value);}}></input>

            <label className='FormLabel'>내용</label>
            <input className="AddInput" type='text' value={body} 
                onChange={(event) => {
                    setBody(event.target.value);}}></input>

            <button className="Addbtn"
                onClick={addTodos}>
                        추가하기
                        </button>
            
          </div>           
      </div>
    </div>
  );
}

export default Form;
