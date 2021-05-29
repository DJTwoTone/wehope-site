import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  GlobalStyles  from './globalStyles'
import { Navbar, Hero } from './Components'


function App() {
  
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Hero />
    
    </BrowserRouter>
  );
}

export default App;
