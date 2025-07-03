import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Burritos from './components/menu/mains/burritos.jsx';  
import Hero from './components/hero/hero.jsx';
import Team from './components/team/team.jsx';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Team />
    </ThemeProvider>
  </React.StrictMode>
);
