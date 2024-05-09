/**
 * Router for all of the pages
 */

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from "./components/homePage"
import {Carousel} from "./components/carousel"
import {ProjectList} from "./components/ProjectList"

export const Router = () =>{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/gallery" element={<Carousel/>}/>
            <Route path="/projects" element={<ProjectList/>}/>
        </Routes>
    </BrowserRouter>
}