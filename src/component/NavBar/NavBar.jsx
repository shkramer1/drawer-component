import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';


import Drawer from './Drawer';

import logo from '../../assets/robot.png'




import './navBarStyles.css'

const NavBar = () => {
  
 


let navigate = useNavigate();

  const onLogoClicked=()=>{
    let path = `/`; 
    navigate(path);
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
}

  return (
    <>
      
        <AppBar position="sticky" className='Appbar' >
          <Toolbar className='toolBar' style={{backgroundColor: 'black'}}>
          
<Button onClick={onLogoClicked} >
             <img src={logo} alt='logo' height='80px' />
            </Button>
            
          <Drawer />
        
          </Toolbar>
        </AppBar>
       
    </>
  );
};

export default NavBar;