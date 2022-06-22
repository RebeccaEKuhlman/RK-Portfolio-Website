import { ProjectDetails } from "./ProjectDetails";
import React from 'react';
import { useState, useContext} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"

export const ProjectList = () => { 
    const [projects, setProjects] = useState(undefined);
    var showMore1 = false;
    const check = (show) =>{if(show){return <p>wow!</p>}}
    /**
     * Add search bar, bar to keep track of where the user is in the page with scroll links
     */
    return <div>
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
                </li>
)*/}
    <div class="card w-75 bg-light p-2 m-3">
    <img src='../bqkLogo' class="card-img-top" alt="Photo of the project"/>
      <div class="card-body">
        <h5 class="card-title">DIG Haunted House</h5>
        <h6 class="card-subtitle mb-2 text-muted">September-October 2021</h6>
        <p class="card-text">We built a haunted house, twas epic
</p>
      </div>
    </div>
    <div class="card w-75 bg-light p-2 m-3">
    <img src='../bqkLogo' class="card-img-top" alt="Photo of the project"/>
      <div class="card-body">
        <h5 class="card-title">DIG Haunted House</h5>
        <h6 class="card-subtitle mb-2 text-muted">September-October 2021</h6>
        <p class="card-text">We built a haunted house, twas epic
</p>
    {
        check(showMore1)
    }
    {<button onClick={showMore1 = !showMore1}/>}
      </div>
    </div>
            </ul>
            <span className="fixed-bottom"><BottomNav /></span>
    </div>
};

