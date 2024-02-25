import React, { useState } from 'react'
import image from '../images/image.png'
import { IoMenu ,IoClose} from "react-icons/io5";
import { FaLinkedin, FaGithub, FaInstagram   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';

const Navbar = () => {

  const[nav,setNav] = useState(false)
  const handleNav = ()=> setNav(!nav)

  return (
    <div className='fixed z-34 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] border-b border-slate-700 shadow-lg'>
      <div>
          <img src={image} alt="" className='w-[60px] h-[60px] rounded-full' />
      </div>


      
        <ul className='text-white hidden md:flex gap-4 text-xl'>
          <li className='hover:text-orange-500'>
              <Link to="home" smooth={true} duration={500}>
                  Home
              </Link>
          </li>
          <li className='hover:text-orange-500'>
              <Link to="about" smooth={true} duration={500} >
                  About
              </Link>
          </li>
          <li className='hover:text-orange-500'>
             <Link to="skills" smooth={true} duration={500} >
                  Skills
              </Link>
          </li>
          <li className='hover:text-orange-500'>
             <Link to="experience" smooth={true} duration={500} >
                  Experience
              </Link>
          </li>
          <li className='hover:text-orange-500'>
              <Link to="contact" smooth={true} duration={500} >
                  Contact
              </Link>
          </li>
        </ul>
    


        <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
          {!nav ? <IoMenu size={25} className='text-white hover:text-orange-500'/> : < IoClose  size={25} className='text-white hover:text-orange-500'/> }
        </div>


        <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-white bg-[#0a192f] flex flex-col justify-center items-center gap-10 text-3xl'}>
            <li className='hover:text-orange-500 w-full pb-2 text-center border-b border-gray-500/30 '>Home</li>
            <li className='hover:text-orange-500 w-full pb-2 text-center border-b border-gray-500/30'>About</li>
            <li className='hover:text-orange-500 w-full pb-2 text-center border-b border-gray-500/30'>Skills</li>
            <li className='hover:text-orange-500 w-full pb-2 text-center border-b border-gray-500/30'>Experience</li>
            <li className='hover:text-orange-500 w-full pb-2 text-center border-b border-gray-500/30'>Contact</li>
        </ul>


        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-500 '>
               <a href="" className='flex justify-between items-center w-full text-gray-300'>
               LinkedIn <FaLinkedin size={30}/>
              </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-black '>
               <a href="" className='flex justify-between items-center w-full text-gray-300'>
               Github <FaGithub size={30}/>
              </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-cyan-500 '>
               <a href="" className='flex justify-between items-center w-full text-gray-300'>
               Email <MdEmail size={30}/>
              </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-red-500 '>
               <a href="" className='flex justify-between items-center w-full text-gray-300'>
              Instagram < FaInstagram  size={30}/>
              </a>
          </li>
          </ul>
        </div>

        
    </div>
  )
}

export default Navbar