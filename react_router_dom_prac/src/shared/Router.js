import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Work from "../pages/works";

const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='work' element={<Work />} />
        <Route path="work/:id" element={<Work />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;