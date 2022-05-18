import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
export const TopNav = () =>{

    return <div>
        <h3 class="navbar-brand">RebeccaKuhlman.com</h3>
         <ButtonGroup variant="text" aria-label="text button group">
            <Button><HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />Home</Button>
            <Button> <CollectionsIcon sx={{ mr: 0.5 }} fontSize="inherit" />Gallery</Button>
            <Button><CodeIcon sx={{ mr: 0.5 }} fontSize="inherit" />Projects</Button>
            <Button><ArticleIcon sx={{ mr: 0.5 }} fontSize="inherit" />Blog</Button>
        </ButtonGroup>
  </div>
}