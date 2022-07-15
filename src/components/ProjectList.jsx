/**
 * This will be expanded post databases class
 * For now, the base styling a couple projects will be displayed via hard code :<
 */

import { ProjectDetails } from "./ProjectDetails";
import React from 'react';
import { useState, useContext} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"
import useCollapse from 'react-collapsed';

export const ProjectList = () => { 
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    //const [projects, setProjects] = useState(undefined);
    /**
     * Add search bar, bar to keep track of where the user is in the page with scroll links
     */
    return <div className="m-3 p-10">
              <TopNav/>
                        {/**<Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                />*/}
              <ul>
                {/**projects.map((project) =>
                    <li>
                        <ProjectDetails value={project}/>
                    </li>)*/}
              <div class="card w-75 bg-light p-2 m-3 mb-10">
              <img src={require('../haunt2021_doll.png')} class="block w-25" alt="Photo of the project"/>
                <div class="card-body">
                  <h5 class="card-title">DIG Haunted House</h5>
                  <h6 class="card-subtitle mb-2 text-muted">September-October 2021</h6>
                  <p class="card-text">The DIG's Annual haunted house project. The DIG team makes almost all of the costumes, props, and décor for the haunted house, and they serve as the actors during it. All semester we independently take on tasks to be creative in getting our parts done, then we come together as a team to put it all together!
                  </p>
                  <div className="collapsible">
                      <div className="header" {...getToggleProps()}>
                          <button className="btn btn-info btn-sm text-white">{isExpanded ? 'Collapse' : 'Expand'}</button>
                      </div>
                      <div {...getCollapseProps()}>
                          <div className="content">
                          I worked on a lot of the parts requiring the vinyl cutter, gaining a new appreciation of its potential as tool. Playing with the utilization of space, and drawing the audience to look at a certain places in the maze was very fun and informative!
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </ul>
            <span className="fixed-bottom"><BottomNav /></span>
            </div>
};

