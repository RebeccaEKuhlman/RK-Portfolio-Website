/**
 * project highlights
 * name, imgSrc, miniDes
 */
 import React from 'react';
 import { useState, useContext} from "react";
 import {useParams, useNavigate} from "react-router-dom";
 
export const MiniCard = () =>{
    const [project, setProject] = useState(undefined);
    const params = useParams();
    const mergeProject = delta => setProject({ ...project, ...delta });
    if (!project){
        project = params;
        return <>Loading...</>
    }
    //TODO: add link to full project description, with hover telling that it will go to a new page... maybe theres
    // a way to send it to a new tab?
    return <div>
        <div className="card-title pl-5 mb-4">
            <img src={project.imgSrc} alt="Photo of the project"/>
            <div>{project.name}{/**div for dividing half on other side of image*/}
            <p>{project.miniDes}</p>
            </div>
        </div>
    </div>
}