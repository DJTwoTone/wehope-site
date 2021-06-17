import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  GlobalStyles  from './globalStyles';
import { Navbar } from './Components';
import Routes from './Routes';


function App() {
  
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes />
    
    </BrowserRouter>
  );
}

export default App;
