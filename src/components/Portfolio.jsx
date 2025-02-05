import React from 'react'; 
import { motion } from 'framer-motion'; 
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import NavBar from '../assets/portfolio/navbar.jpg';
import ReactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
  const portfolios = [
    { id: 1, title: "LSTM Model" },  
    { id: 2, title: "Amazon Web Scraper" },
    { id: 3, title: "CSVIFY" }, 
    { id: 4, title: "BoundingBox" }, 
    { id: 5, title: "Spotify Utilites" }, 
    { id: 6, title: "Sonny Bot" }
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full gap-y-10">

        {/* Title Section with Animated Gradient and Underline */}
        <div className="pb-8 relative flex flex-col items-start">
          <div className="inline-block relative">
            <motion.h1
              className="text-6xl font-bold inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #06b6d4, #3b82f6)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            >
              Portfolio
            </motion.h1>

            {/* Animated Underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-1.5 w-full"
              style={{
                backgroundImage: "linear-gradient(to right, #06b6d4, #3b82f6)",
                bottom: "-9px"
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.75, ease: "easeOut" }}
            /> 
          </div>

          <p className="py-6 text-lg">Click on the project to view source code!</p>
        </div> 



        {/* Animated Grid of Projects */}
        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        > 
          {portfolios.map(({ id, title }) => (  
            <motion.div
            key={id}
            className="relative w-full h-40 rounded-lg flex justify-center items-center text-white font-bold text-2xl overflow-hidden shadow-md"
            style={{
              background: "linear-gradient(-45deg, #4158D0, #E560DC, #FFB374, #E5F5FF, #D840B6)",
              backgroundSize: "400% 400%",
            }}
          >
            {title}
          </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
