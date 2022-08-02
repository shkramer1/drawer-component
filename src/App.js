import React from "react";
import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer/Footer';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import {CssBaseline, Card, Typography, Paper, Button} from '@mui/material';
import './App.css';

function App() {
  return (
    <>
    <Router>
     
      <CssBaseline /> 
    <div>
    <NavBar />
    </div>
    <main>
     
     </main>
   
    <div>
      <Footer />
    </div>
     </Router>
    </>
  );
}

export default App;
