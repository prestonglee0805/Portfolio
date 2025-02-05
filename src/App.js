import React from 'react';
import './App.css'; 
import NavBar from "./components/NavBar"; 
import Home from "./components/Home";
import SocialLinks from './components/SocialLinks'; 
import About from './components/About';  
import Portfolio from './components/Portfolio'; 
import { Experience } from './components/Experience'; 
import Contact from './components/contact';  
import RightsReserved from './components/RightsReserved'

function App() { 
  return ( // Add the return statement here 
    <div> 
      <NavBar /> 
      <Home />  
      <About />
      <SocialLinks />  
      <Portfolio /> 
      <Experience />  
      <Contact/> 
      <RightsReserved/>
      
    </div>
  );
}

export default App;
