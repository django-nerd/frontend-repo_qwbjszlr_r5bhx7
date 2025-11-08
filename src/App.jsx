import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MenuShowcase from './components/MenuShowcase.jsx';
import QRSection from './components/QRSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuShowcase />
        <QRSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
