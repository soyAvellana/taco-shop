import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Hero />
      {/* Weitere Komponenten */}
    </div>
  );
}

export default App;
