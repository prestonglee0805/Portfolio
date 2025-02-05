import React from 'react'; 
import { motion } from 'framer-motion'; 

const Portfolio = () => {
  const portfolios = [
    { id: 1, title: "TensorFlow Stock Model", url: "https://github.com/prestonglee0805/Stock-Prediction-Model" },  
    { id: 2, title: "Amazon Web Scraper", url: "https://github.com/prestonglee0805/Amazon-Web-Scraper"},
    { id: 3, title: "CSVify", url: "https://github.com/prestonglee0805/CSVify" }, 
    { id: 4, title: "Bounding Box Labeller for NASA", url: "https://github.com/prestonglee0805/seg-bbox-labeller"}, 
    { id: 5, title: "Spotify Utilites", url: "https://github.com/prestonglee0805/Spotify-Utils"}, 
    { id: 6, title: "Sonny ChatBot Playground", url: "https://github.com/prestonglee0805/SonnyBotTester"}
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full gap-y-10">

        {/* Title Section with Animated Gradient and Underline */}
        <div className="pb-8 mt-20 relative flex flex-col items-start">
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

          <p className="py-6 text-lg">Click on the project to view the source code in GitHub:</p>
        </div> 



        {/* Animated Grid of Projects */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        > 
          {portfolios.map(({ id, title,url }) => (  
            <motion.div
              key={id}
              className="relative w-full h-40 rounded-lg flex justify-center items-center text-white font-bold text-xl sm:text-2xl md:text-3xl shadow-md text-center px-2 cursor-pointer"
              style={{
                background: "linear-gradient(45deg, #06b6d4, #3b82f6)",
              }}
              initial={{ opacity: 0, scale: 0.9 }} // ✅ Each tile fades in and grows
              whileInView={{ opacity: 1, scale: 1 }} // ✅ Smooth animation 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.6)" }}
              transition={{ duration: 0.8, ease: "easeOut" }} 
              onClick= {() => window.open(url, "_blank")}
            > 
            <span className="w-full text-center px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl break-words" > 
              {title}
            </span>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Portfolio;
