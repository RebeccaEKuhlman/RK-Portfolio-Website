/**
 * Needs generalization
 */

import React, {useEffect, useState} from 'react';
import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"
import useCollapse from 'react-collapsed'
import Button from '@mui/material/Button';
import axios from 'axios';

export const ProjectList = () => { 
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedStates, setExpandedStates] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getProjects');
                setProjects(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (isLoading) {
        return <div className="m-2 p-10"> <TopNav/> Loading...</div>;
    }

    if (error) {
        return <div className="m-2 p-10"><TopNav/> Error: {error.message}</div>;
    }

    const toggleExpand = (index) => {
        setExpandedStates(current =>
            current.map((state, i) => (i === index ? !state : state)));
    };

    return <div className="m-2 p-10">
              <TopNav/>
              <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <div className="card w-75 bg-light p-2 m-3 mb-10">
                            <img src={project.image} className="block w-25" alt={project.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{project.date}</h6>
                                <p className="card-text">{project.summary}</p>
                                <div className="collapsible">
                                    <div className="header" {...getToggleProps()}>
                                    <Button
                                            className="btn" variant="contained"
                                            onClick={() => toggleExpand(index)}>
                                            {expandedStates[index] ? 'Collapse' : 'Expand'}
                                        </Button>
                                        <br/>
                                        <br/>
                                    </div>
                                    {expandedStates[index] && (
                                        <div className="content">
                                            {console.log(project.details)}
                                            {project.details}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <br />
            <br />
            <span className="fixed-bottom"><BottomNav /></span>
            </div>
};

