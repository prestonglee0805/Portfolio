import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div> 
      <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"> 
          
          {/* Title Section with Animated Gradient and Underline */}
        <div className="pb-8 mt-20 relative flex flex-col items-start mt-5">
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
              Contact 
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
          </div>


          {/* Form Section */}
          <div className="flex justify-center items-center py-20">
            <motion.form 
              action="https://getform.io/f/bollxzxa" 
              method="POST" 
              className="flex flex-col w-full md:w-1/2 gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                whileFocus={{ scale: 1.05 }}
              /> 

              <motion.input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                whileFocus={{ scale: 1.05 }}
              /> 

              <motion.textarea 
                placeholder="Enter your message" 
                name="message" 
                rows="10" 
                className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                whileFocus={{ scale: 1.05 }}
              /> 

              <motion.button 
                name="contact-button" 
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Let's Connect
              </motion.button>

            </motion.form>
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default Contact;
