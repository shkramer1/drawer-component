import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Typography
} from "@mui/material";
import { Menu, LinkedIn, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './DrawerStyle.css'
import logo from '../../assets/robot.png';



function DrawerComponent() {

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
    <main >
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        
      >
        <List  className='drawer'>
           <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <img  src={logo} alt='logo'  height='100px'  />
            </ListItemText>
          </ListItem>
         <ListItem  onClick={() => setOpenDrawer(false)}>
            <ListItemText  >
              <Link className='drawerHeader' to="/" >Home</Link>
            </ListItemText>
          </ListItem> 
         
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink' >Services</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink' >Agency Page</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink' >About</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink'  >Team</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink' >Contact</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink' >External Links</Button>
            </ListItemText>
          </ListItem>

          <Divider style={{backgroundColor: 'yellowgreen'}} />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Typography variant= 'h5' className='drawerHeader'>Projects</Typography>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink' >Project 1</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button className='drawerLink' >Project 2</Button>
            </ListItemText>
          </ListItem>
         
       
        <ListItem  onClick={() => setOpenDrawer(false)}>
            <ListItemText >
            <Button className='drawerLink' >
             <LinkedIn className="icon" />
            </Button>
            <Button className='drawerLink' >
             <Twitter className='icon' /> 
            </Button>
            <Button className='drawerLink' >
              <Instagram className='icon' />
            </Button>
             
            
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
  
      <IconButton  onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu className="secondary" />
      </IconButton>
      </main>
    </>
  );
}
export default DrawerComponent;
