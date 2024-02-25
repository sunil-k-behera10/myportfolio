import React from 'react'
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JavaScript from '../images/javascript.png';
import ReactImg from '../images/react.png';
import Node from '../images/node.png';
import Tailwind from '../images/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='text-gray-300 bg-[#0a192f] h-screen pt-36'>
      <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-orange-500 border-b-4'>Skills</p>
          <p className='py-4' >These are the technologies that I've worked with.</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
          <div className='shadow-md shadow-slate-800 hover:scale-110 duration-200 hover:cursor-pointer'>
            <img className='w-[40px] mx-auto' src={HTML} alt="" />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-slate-800 hover:scale-110 duration-200 hover:cursor-pointer'>
            <img className='w-[40px] mx-auto' src={CSS} alt="" />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-slate-800 hover:scale-110 duration-200 hover:cursor-pointer'>
            <img className='w-[40px] mx-auto' src={JavaScript} alt="" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-slate-800 hover:scale-110 duration-200 hover:cursor-pointer'>
            <img className='w-[40px] mx-auto' src={ReactImg} alt="" />
            <p className='my-4'>REACT</p>
          </div>


          <div className='shadow-md shadow-slate-800 hover:scale-110 duration-200 hover:cursor-pointer'>
            <img className='w-[40px] mx-auto' src={Node} alt="" />
            <p className='my-4'>NODE</p>
          </div>


          <div className='shadow-md shadow-slate-800 hover:scale-110 duration-200 hover:cursor-pointer'>
            <img className='w-[40px] mx-auto' src={Tailwind} alt="" />
            <p className='my-4'>TAILWIND</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills