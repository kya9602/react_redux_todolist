import React from "react";
import TodoList from "../components/pages/TodoList";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Detail from "../components/pages/Detail";


const Router = () =>{
 return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/:id" element={<Detail />} />
        </Routes>
    </BrowserRouter>
 )
}

export default Router;
