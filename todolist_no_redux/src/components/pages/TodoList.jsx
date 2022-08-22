import React from "react";
import Header from '../header/Header';
import Form from '../form/Form';
import List from "../list/List";
import Layout from "../layout/Layout";

function TodoList() {
  const [todos, setTodos] = React.useState([
    {
        id: 1,
        title:'1리액트 공부하기',
        body:'리액트 기초를 공부해봅시다',
        isDone:false
    },
    {
        id: 2,
        title:'2리액트 공부하기',
        body:'리액트 기초를 공부해봅시다',
        isDone:true
    }
]);

  return (
    
      <Layout>
        <Header />
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </Layout>
    
  );
}

export default TodoList;
