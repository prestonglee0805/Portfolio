import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { ReactTyped } from 'react-typed'; 
import './Home.css'; 
import { Link } from 'react-scroll' 
import { motion } from 'framer-motion';


const Home = () => {  

  const [fadeIn, setFadeIn] = useState(false);   

  const [fadeText, setFadeText] = useState(false); 

  useEffect(() => {
    // Trigger the fade-in effect when the page loads
    setFadeIn(true);
  }, []);
 
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 relative">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white relative top-5">
            I am a 
            <div className=" bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold"
            style = {{minWidth: "500px", display: "inline-block", minHeight: '125px'}}
            >
              <ReactTyped 
                strings={[
                  'Software Developer',
                  'Full Stack Developer', 
                  'Data Scientist', 
                  ''
                  
                ]}
                typeSpeed={8}
                backSpeed={30} 
                loop = {false}
                
                onComplete={() => setTimeout(() => setFadeText(true), 500)}    
              />  

          {/* Fades in AFTER ReactTyped finishes typing */}
          {fadeText && (
                <motion.span 
                  key="software-engineer"
                  className="absolute left-0 top-11 py-2 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold inline-block"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6,#9333ea, #06b6d4)",
                    backgroundSize: "600% 100%",
                  }}
                  initial={{ opacity: 0 }} 
                  animate={{
                    opacity: 1, 
                    backgroundPosition: ["0% 50%", "-300% 50%"], 
                  }} 
                  transition={{ 
                    opacity: { duration: 2, ease: "easeOut" }, 
                    backgroundPosition: { duration: 12, ease: "linear", repeat: Infinity, repeatType: "mirror" } 
                  }}> 

                  Software Engineer
                </motion.span>
              )} 

          </div>
            </h2> 








          <p className="text-gray-500 py-4 max-w-md relative bottom-10">
            I am a Junior at New York University with experience in software development. I have experience in full-stack development, data management and analysis, and machine learning. 
          </p>
          <div>
            <Link to = "portfolio" smooth duration = {500} offset = {-120} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer relative bottom-3">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={23} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={HeroImage}
            alt="my profile"
            className={`w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[500px] rounded-2xl object-cover relative md:right-[-2px] lg:right-[-50px] ${
              fadeIn ? 'fade-in' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
