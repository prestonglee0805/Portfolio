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


  <p className="text-xl mt-4">
  Hey! I am a junior at NYU pursuing a bachelor's degree in computer science, with a focus on software engineering and development, along with an interest in machine learning and data science. My passion lies in exploring the intersection of finance, technology, and data analysis, combining my technical skills with real-world problems to find actionable solutions.  
  </p> 

  <p className="text-xl mt-4">
  I’ve gained hands-on experience as a software engineering intern at Sonar, where I contributed to full-stack development and AI-driven applications. My work involved optimizing backend performance, integrating APIs, and collaborating in an agile team to develop scalable solutions. Additionally, I work closely with AI data scientists on data preprocessing, model evaluation, and fine-tuning large language models (LLMs) for various use cases. My experience in private equity at Belveron Partners has further equipped me with a strong foundation in financial modeling, data-driven investment analysis, and leveraging technology to enhance decision-making processes.
  </p>

  <p className="text-xl mt-4">
  I’m dedicated to building systems that drive meaningful impact, powered by my skills in software engineering, financial analysis, fundraising, collaboration, and a commitment to supporting others.
  </p> 

  <p className="text-xl mt-4">
  Apart from coding, I enjoy rock climbing, weightlifting, music production, filmmaking, skateboarding, and fashion. I have a lot of familiarity with editing and fx softwares including AfterEffects, PremierePro, and Red Giant. I am a huge music fan, particularly of alternative rock and shoegaze. This includes Jeff Buckley, Radiohead, Slowdive, and the Smiths!
  </p> 


</motion.div>

    </div>
  );
};

export default About;
