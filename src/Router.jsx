import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from "./components/homePage"
import {Carousel} from "./components/carousel"
import {ProjectList} from "./components/ProjectList"
import {Blog} from "./components/Blog"

export const Router = () =>{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/gallery" element={<Carousel/>}/>
            <Route path="/projects" element={<ProjectList/>}/>
            <Route path="/Blog" element={<Blog/>}/>
        </Routes>
    </BrowserRouter>
}