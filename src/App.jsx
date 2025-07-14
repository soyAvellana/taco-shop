import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from './components/navbar/navbar.jsx'; 
import Footer from './components/footer/footer.jsx'; 

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

     <main className="flex-grow">
  <Outlet />
</main>
      <Footer />
    </div>
  );
}
