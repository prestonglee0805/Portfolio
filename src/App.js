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
import SocialsPage from './components/SocialsPage';

function App() { 
  return ( // Add the return statement here  
  <div className="App overflow-x-hidden">
    <div> 
      <NavBar /> 
      <Home />  
      <About />
      <SocialLinks />  
      <Portfolio /> 
      <Experience />  
      <Contact/>  
      <SocialsPage /> 
      <RightsReserved/>
      
    </div> 
  </div>
  );
}

export default App;
