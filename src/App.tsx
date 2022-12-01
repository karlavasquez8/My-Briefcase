import React from 'react';
import Nav from './Components/Nav/Nav'
import './App.css';
import About from './Components/About/About';
import Proyects from './Components/Proyects/Proyects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Proyects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
