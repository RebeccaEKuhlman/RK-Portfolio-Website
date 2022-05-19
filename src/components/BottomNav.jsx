import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArticleIcon from '@mui/icons-material/Article';
import {SwipeableTemporaryDrawer} from './Contact'

const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
}
const scrollToBot = () => {
    window.scrollTo({ 
    top: document.documentElement.scrollHeight, 
    behavior: 'auto'
    /* you can also use 'auto' behaviour 
       in place of 'smooth' */
  }); }

export const BottomNav = () => {
    
    const [value, setValue] = React.useState(0);
    var anchor = 'left'
  return  <div>{}
    <BottomNavigation
        showLabel={false}
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}>  
    <BottomNavigationAction showLabel={false} label="Up" icon={<KeyboardArrowUpIcon/>} onClick={() => {scrollToTop()}}/> 
    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    <BottomNavigationAction label="Gallery" icon={<CollectionsIcon />} />
    <BottomNavigationAction label="Projects" icon={<CodeIcon />} />
    <BottomNavigationAction label="Blog" icon={<ArticleIcon />} />
    <SwipeableTemporaryDrawer label ="Contact" showLabel={false} icon={<ContactPageIcon />} class="MuiBottomNavigationAction" value={<ContactPageIcon />} />
    {/**<BottomNavigationAction label="Contact" icon={<ContactPageIcon />} onClick={() => {}}/>*/}
    <BottomNavigationAction showLabel={false} label="Down" icon={<KeyboardArrowDownIcon />} onClick={() => {scrollToBot()}}/> 
    </BottomNavigation>
</div>
}

