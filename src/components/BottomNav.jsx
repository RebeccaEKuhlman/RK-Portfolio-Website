import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import CodeIcon from '@mui/icons-material/Code';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  return  <div>
    <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}>  
    <BottomNavigationAction label="Up" icon={<ArrowUpwardIcon />} onClick={() => {scrollToTop()}}/> 
    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    <BottomNavigationAction label="Gallery" icon={<CollectionsIcon />} />
    <BottomNavigationAction label="Projects" icon={<CodeIcon />} />
    <BottomNavigationAction label="Down" icon={<KeyboardArrowDownIcon />} onClick={() => {scrollToBot()}}/> 
    </BottomNavigation>
</div>
}

