import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      name="about" //can scroll to here using href="#about" from navBar 
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center"
    >
     <motion.div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center gap-y-8"
        initial={{ opacity: 0, y: 80 }} // Initial state: invisible and below
        whileInView={{ opacity: 1, y: 0 }} // Smooth animation
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >


        {/* Title Section */}
        <div className="pb-8 relative">
          {/* Animated Gradient Text */} 
          <div className = "inline-block relative">
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
            About
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
            transition={{
              duration: 1.75,
              ease: "easeOut",
            }}
          /> 
          </div>
        </div>


  <p className="text-xl mt-8">
  I am a junior at NYU pursuing a bachelor's degree in computer science, with a strong focus on software engineering and development. My passion lies in exploring the intersection of finance and technology, combining technical expertise with real-world financial insights. I’ve gained hands-on experience through a software engineering internship at Sonar, where I contributed to collaborative development projects, leveraging teamwork and problem-solving to deliver innovative solutions. In addition, my experience in private equity at Belveron Partners provided me with a strong foundation in creating actionable financial strategies.
  </p>

  <br />

  <p className="text-xl">
  I’m dedicated to building systems that drive meaningful impact, powered by my skills in software engineering, financial analysis, fundraising, collaboration, and a commitment to supporting others.
  </p>
</motion.div>

    </div>
  );
};

export default About;
