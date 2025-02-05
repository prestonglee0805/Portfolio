import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";



const SocialLinks = () => {  

  const links = [
    {
      id: 1, 
      child: (
        <>
          LinkedIn< FaLinkedin size={30} className = "transform transition-transform duration-700 group-hover:rotate-[360deg]" /> 
          </> 
      ), 
      href: 'https://www.linkedin.com/in/preston-lee-b4799920b/',
      style: 'rounded-tr-md'
    }, 
    {
      id: 2, 
      child: (
        <>
          GitHub < FaGithub size={30} className = "transform transition-transform duration-700 group-hover:rotate-[360deg]" /> 
          </> 
      ), 
      href: 'https://github.com/prestonglee0805',
    }, 
    {
      id: 3, 
      child: (
        <>
          Mail < HiOutlineMail size={30} className = "transform transition-transform duration-700 group-hover:rotate-[360deg]" /> 
          </> 
      ), 
      href: 'mailto:prestongordonlee@gmail.com',
    }, 


  ]

  
  return (
    <div className = "hidden lg:flex flex-col top-[35%] left-0 fixed"> 

      <ul>

        {links.map(({id,child,href,style,download}) => ( 
          <li key = {id}  
          className={"group flex justify-between items-center w-40 h-14 px-4  bg-black text-white cursor-pointer ml-[-100px] transition-all duration-700 hover:ml-0 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500  hover:rounded-md hover:text-white" + " " + style} > 

       <a href = {href}
       className = "flex justify-between items-center w-full text-white"  
       download = {download} 
       target = "_blank"  
       rel = "noopener noreferrer"
       >  
       {child} 
    
      </a>
    </li>

      ))}

        
      </ul>
      



    </div>
  )
};

export default SocialLinks;