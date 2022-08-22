import React from "react";
import Form from "../form/From";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import List from "../list/List";

const TodoList=()=>{

    return (
        <Layout>
          <Header />
          <Form />
          <List />
        </Layout>
    );
  
}

export default TodoList;