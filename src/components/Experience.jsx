import React from 'react';
import { motion } from 'framer-motion';
import html from '../assets/experience/html.png';
import css from '../assets/experience/css.png';
import Java from '../assets/experience/java.png';
import JavaScript from '../assets/experience/javascript.png';
import Python from '../assets/experience/python.png';
import reactImage from '../assets/experience/react.png';
import TensorFlow from '../assets/experience/tensorflow.png';
import Tailwind from '../assets/experience/tailwind.png';
import github from '../assets/experience/github.png';

export const Experience = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: Python, title: 'Python', style: 'shadow-blue-500' },
    { id: 4, src: Java, title: 'Java', style: 'shadow-red-500' },
    { id: 5, src: JavaScript, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 6, src: reactImage, title: 'React', style: 'shadow-blue-600' },
    { id: 7, src: TensorFlow, title: 'TensorFlow', style: 'shadow-orange-500' },
    { id: 8, src: Tailwind, title: 'Tailwind', style: 'shadow-sky-400' },
    { id: 9, src: github, title: 'GitHub', style: 'shadow-gray-400' },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

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
              Experience
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

          <p className="py-6 text-lg">These are the technologies I have worked with:</p>
        </div>

        {/* Animated Grid of Technologies */}
        <motion.div 
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`group shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              whileHover={{ scale: 1.1 }}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};
