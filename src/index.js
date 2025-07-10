import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Navbar from './components/navbar/navbar.jsx'; 
import Hero from './components/hero/hero.jsx';
import { ThemeProvider } from "@material-tailwind/react";
import About from './components/about/about.jsx';
import Team from './components/team/team.jsx'; 
import Menu from './components/menu/menu.jsx';
import Welcome from './components/welcome/welcome.jsx';
import Footer from './components/footer/footer.jsx';
import Contact from './components/contact/contact.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Welcome />
            <About />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
