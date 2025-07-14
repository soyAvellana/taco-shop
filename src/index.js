import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App.jsx';
import Hero from './components/hero/hero.jsx';
import Welcome from './components/welcome/welcome.jsx';
import About from './components/about/about.jsx';
import Team from './components/team/team.jsx';
import Menu from './components/menu/menu.jsx';
import Contact from './components/contact/contact.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={
            <>
              <Hero />
              <Welcome />
              <About />
            </>
          } />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
