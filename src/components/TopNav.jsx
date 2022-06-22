import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useNavigate} from "react-router-dom";
export const TopNav = () =>{
    const navigate = useNavigate();
    return <div>
        <h3 class="navbar-brand mr-10">RebeccaKuhlman.com</h3>
        <div class="row">
         <ButtonGroup variant="text" aria-label="text button group">
            <div class="col-2"><Button onClick={()=> {navigate("/")}}><HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />Home</Button></div>
            <div class="col-2"><Button onClick={()=> {navigate("/gallery")}}><CollectionsIcon sx={{ mr: 0.5 }} fontSize="inherit" />Gallery</Button></div>
            <div class="col-2"><Button onClick={()=> {navigate("/projects")}}><CodeIcon sx={{ mr: 0.5 }} fontSize="inherit"/>Projects</Button></div>
            <div class="col-2"><Button onClick={()=> {navigate("/blog")}}><ArticleIcon sx={{ mr: 0.5 }} fontSize="inherit" />Blog</Button></div>
            <div class="col-2"><Button onClick={()=> window.open('https://github.com/RebeccaEKuhlman')}><GitHubIcon sx={{ mr: 0.5 }} fontSize="inherit" />Github</Button></div>
            <div class="col-2"><Button onClick={()=> window.open('https://www.linkedin.com/in/rebecca-kuhlman-8bab731a0/')}><LinkedInIcon sx={{ mr: 0.5 }} fontSize="inherit" />LinkedIn</Button></div>
        </ButtonGroup></div>

  </div>
}