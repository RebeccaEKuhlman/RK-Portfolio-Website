import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Icon from '@mui/material/Icon'

export const SwipeableTemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem key='Github' onClick={()=> window.open('https://github.com/RebeccaEKuhlman')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GitHubIcon/>
              </ListItemIcon>
              <ListItemText primary='Github' />
            </ListItemButton>
          </ListItem>
        <ListItem key='LinkedIn' onClick={()=> window.open('https://www.linkedin.com/in/rebecca-kuhlman-8bab731a0/')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkedInIcon/>
              </ListItemIcon>
              <ListItemText primary='LinkedIn' />
            </ListItemButton>
          </ListItem>
          <ListItem key='DIG' onClick={()=> window.open('https://www.thedig.org/')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon>'-'</Icon>
              </ListItemIcon>
              <ListItemText primary='The DIG' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem key='Email' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText primary='rkuhlman@smu.edu' />
            </ListItemButton>
          </ListItem>
      
      </List>
    </Box>
  );

  return (
    <div>
    {['Contact'].map((anchor) => (
      <div>
        <BottomNavigationAction label="Contact" icon={<ContactPageIcon />} onClick={toggleDrawer(anchor, true)}></BottomNavigationAction>
        <SwipeableDrawer
          anchor='left'
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </div>
    ))}
  </div>
  );
}
