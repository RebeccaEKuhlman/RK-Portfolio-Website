/**
 * uses MUI components for the top nav bar 
 */

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
export const TopNav = () =>{
    const navigate = useNavigate();
    return <div>
        <Box sx={{
    bgcolor: 'primary.main',
    borderColor: "primary.dark", 
    border: 2,
    borderRadius: 2,
    px: 2,
    zIndex: 'tooltip',
    boxShadow: 8,
  }}>
        <h4 class="mr-10">Rebecca Kuhlman ~~~ innovatively imaginative ~~~ programmer, maker, learner</h4>
        </Box>
        <br />
        <div class="row">
         <ButtonGroup variant="text" aria-label="text button group" color="secondary">
            <div class="col-2"><Button onClick={()=> {navigate("/")}}><HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />Home</Button></div>
            <div class="col-2"><Button onClick={()=> {navigate("/gallery")}}><CollectionsIcon sx={{ mr: 0.5 }} fontSize="inherit" />Gallery</Button></div>
            <div class="col-2"><Button onClick={()=> {navigate("/projects")}}><CodeIcon sx={{ mr: 0.5 }} fontSize="inherit"/>Projects</Button></div>
            <div class="col-2"><Button onClick={()=> window.open('https://github.com/RebeccaEKuhlman')}><GitHubIcon sx={{ mr: 0.5 }} fontSize="inherit" />Github</Button></div>
            <div class="col-2"><Button onClick={()=> window.open('https://www.linkedin.com/in/rebecca-kuhlman-8bab731a0/')}><LinkedInIcon sx={{ mr: 0.5 }} fontSize="inherit" />LinkedIn</Button></div>
        </ButtonGroup>
        </div>
        

  </div>
}