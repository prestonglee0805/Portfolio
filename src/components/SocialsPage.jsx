import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialsPage = () => {
  const socials = [
    { id: 1, url: "https://github.com/prestonglee0805", icon: <FaGithub size={40} />, label: "GitHub" },
    { id: 2, url: "https://www.linkedin.com/in/prestonglee/", icon: <FaLinkedin size={40} />, label: "LinkedIn" },
    { id: 3, url: "mailto:prestongordonlee@gmail.com", icon: <FaEnvelope size={40} />, label: "Email" },
  ];

  return (
    <div name="Social Links" className="bg-gradient-to-b from-gray-800  to-black w-full text-white min-h-[20vh]">   
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">  

        {/* Social Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        > 
          {socials.map(({ id, url, icon, label }) => (  
            <motion.button
              key={id}
              className="flex items-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md text-lg font-semibold transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.6)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() => window.open(url, "_blank")}
            > 
              {icon}
              {label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialsPage;
