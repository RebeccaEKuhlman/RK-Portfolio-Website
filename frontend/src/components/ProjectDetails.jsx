/**
 * Full project description
 */
 import React from 'react';
 import { useState, useContext} from "react";
 
export const ProjectDetails = () =>
{ 
    const [project, setProject] = useState(undefined);
    const mergeProject = delta => setProject({ ...project, ...delta });

    /**
     * <button>See Details</button>
            <p>project details</p>
     */
    return <div>
         <img src={project.imgSrc} alt="Photo of the project"/>
        <div>{project.name}{/**div for dividing half on other side of image*/}
        {project.date}
        <p>{project.description}</p>
        </div>
    </div>
}