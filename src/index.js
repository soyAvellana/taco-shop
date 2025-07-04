import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Burritos from './components/menu/mains/burritos.jsx';  
import Hero from './components/hero/hero.jsx';
import { ThemeProvider } from "@material-tailwind/react";
import About from './components/about/about.jsx';
import Team from './components/team/team.jsx'; // Team statt ProfileCard

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
   
    </ThemeProvider>
  </React.StrictMode>
);
