import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen text-white'>
          <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-3xl text-orange-600'>Hello, My name is</p>
            <h1 className='text-4xl md:text-5xl font-bold text-zinc-300'>Sunil Kumar Behera</h1>
            <h2 className='text-4xl sm:text-5xl text-gray-400 font-bold pt-2'>I'm a Front-End Developer</h2>
            <p className='text-gray-400 py-4 max-w-[650px] text-justify'>I have keen interest in creating graphical user interface of a website. I uses technologies like HTML, CSS, JavaScript, ReactJs and TailwindCSS so users can view and interact with that website. </p>

            <div>
              <button  className='border group px-6 my-2 py-4 flex items-center hover:bg-orange-700 rounded-md hover:border-orange-600'>
                View Work<FaArrowRight className='ml-2 group-hover:rotate-90 duration-200' />
              </button>
            </div>
          </div>
    </div>
  )
}

export default Home