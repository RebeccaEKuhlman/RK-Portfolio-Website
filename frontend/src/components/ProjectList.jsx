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
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Replace 'your_backend_endpoint' with your actual Flask backend endpoint
                const response = await axios.get('http://localhost:5000/getProjects');
                setProjects(response.data); // Assuming the response data is the array of projects
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

    return <div className="m-2 p-10">
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
              <img src={require('../haunt2021_doll.png')} class="block w-25" alt="Crocheted voodoo doll"/>
                <div class="card-body">
                  <h5 class="card-title">DIG Haunted House</h5>
                  <h6 class="card-subtitle mb-2 text-muted">September-October 2021</h6>
                  <p class="card-text">The DIG's Annual haunted house project. The DIG team makes almost all of the costumes, props, and décor for the haunted house, and they serve as the actors during it. All semester we independently take on tasks to be creative in getting our parts done, then we come together as a team to put it all together!
                  </p>
                  <div className="collapsible">
                      <div className="header" {...getToggleProps()}>
                      <Button
                                      className="btn " variant="contained">{isExpanded ? 'Collapse' : 'Expand'}</Button>
                      </div>
                      <br />
                      <div {...getCollapseProps()}>
                          <div className="content">
                          I worked on a lot of the parts requiring the vinyl cutter, gaining a new appreciation of its potential as tool. Playing with the utilization of space, and drawing the audience to look at a certain places in the maze was very fun and informative! The picture is a doll I crocheted, which turned out much creepier than I expected. 
                          </div>
                      </div>
                  </div>
                </div>
              </div>
                  <div className="card w-75 bg-light p-2 m-3 mb-10">
                      <img src={require('../derby2022_wildTrophy.png')} className="block w-25" alt="Derby 2022 trophy for most wild derby car"/>
                      <div className="card-body">
                          <h5 className="card-title">DIG Derby</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Spring 2022</h6>
                          <p className="card-text">The DIG's Annual derby. I helped organized the event as a team member, and made a car myself.
                              The idea was a fish bowl, the glass replaced with acrylic, and the sand replaced with saw dust. I filled the car with sea creatures and 3D printed benchy boats, and painted it.
                              While I definitely sacrificed function over form, my car crossed the finish line in reasonable time, and I was quite proud of how it turned out.
                              I won the DIG Derpy's Most Wild Car award for my efforts.
                          </p>
                          <div className="collapsible">
                              <div className="header" {...getToggleProps()}>
                                  <Button
                                      className="btn " variant="contained">{isExpanded ? 'Collapse' : 'Expand'}</Button>
                              </div>
                              <div {...getCollapseProps()}>
                                    <br/>
                                  <div className="content">
                                  I first made the base car, laser cutting the wheels, and getting a good block of wood for the body. 
                                      I experimented with some wood carving with a Dremel, and while an interesting exercise, it didn't go into the final car.
                                      Once I decided on the theme of my car, I went to work on laser cutting the acrylic for the bowl. 
                                      I knew I wasn't going to get a true round fishbowl, and instead focused on making sure that it would be easily attachable to the body. 
                                      After securing the acrylic, I went into the details. I collected sawdust from my woodshop projects, got some leftover benchies*, and some paint.
                                      A lot of glue later, the car was completed. 
                                        <br/>
                                      *The Benchy boat is a common 3D print for testing that a 3D printer works. It's often done after a machine is fixed to confirm it's operating properly. 
                                      Given that the DIG has quite a few 3D printers, we have a lot of benchies lying around. 
                                      </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </ul>
            <br />
            <br />
            <span className="fixed-bottom"><BottomNav /></span>
            </div>
};

