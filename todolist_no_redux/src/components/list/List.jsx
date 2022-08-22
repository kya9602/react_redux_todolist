import './style.css';
import React from "react";
import Todo from '../todo/Todo';

function List({ todos, setTodos }) {

    const falseList = todos.filter(todo =>(
        todo.isDone === false
      ));
      const trueList = todos.filter(todo =>(
        todo.isDone === true
      ));
      
    const onRemove = id => {
        // todo.id 가 매개변수로 작성하지 않는 데이터들만 추출해서 새로운 배열을 만듬
        // = todo.id 가 id 인 것을 제거함
        setTodos(todos.filter(todo => todo.id !== id));
      };
      
    const TodoDone = id => {
      setTodos(
        todos.map((todo)=>
         todo.id === id ?{...todo, isDone : !todo.isDone}:todo 
         //전개연산자
         //새로운 배열을 만들어서 todos의 값을 카피하여
         // 조건에 해당하는 부분만 보낸다.
         //map를 이용하여 todos안의 todo 객채중 특정 id를 가진 todo의 isDone 값을 반전 시킨다.
         //id값이 todo.id와 같을경우 새로운 객체를 생성, 
         //다를경우 처음 상태 그대로 반환합니다. (todo.id===id ? .. : .. ).
         //즉, todos배열에서 변화가 필요한 원소만 업데이트되고 나머지는 그대로 남게됩니다
         )
         )
        };

        //console.log(todos)
      


  return (
    <div>
        <div className="ListContainer">
                    {/* List */}
        <h2>Working.. 🔥</h2>
        <div className='ListWrapper'>
            {falseList.map((todo,id)=>{
                    return(
                      <Todo 
                          todo={todo}
                          key={id}
                          setTodos={setTodos}
                          todos={todos}
                          onRemove={onRemove}
                          TodoDone={TodoDone}
                      />

                    )
                })}
        </div>

        <h2>Done.. 🎉</h2>
        <div className='ListWrapper'>
            {trueList.map((todo,id)=>{
                    return(
                        <Todo 
                          todo={todo}
                          key={id}
                          setTodos={setTodos}
                          todos={todos}
                          onRemove={onRemove}
                          TodoDone={TodoDone}
                    />

                    )
                })}
        </div>

        </div>
    </div>

  );
}

export default List;
