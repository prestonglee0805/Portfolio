import React from 'react';
import './App.css'; 
import NavBar from "./components/NavBar"; 
import Home from "./components/Home";
import SocialLinks from './components/SocialLinks'; 
import About from './components/About';  
import Portfolio from './components/Portfolio';


function App() { 
  return ( // Add the return statement here 
    <div> 
      <NavBar /> 
      <Home />  
      <About />
      <SocialLinks />  
      <Portfolio />
      
    </div>
  );
}

export default App;
