import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full  text-[#36454F] bg-[#fff9cd] flex justify-center items-center pt-28'>
      <form action="" className='flex flex-col max-w-[800px] w-full text-black '>
        <div className='p-8'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-500  text-[#36454F]'>Contact</p>
          <p className='text-[#36454F] py-4'>Submit the form below or send me an email -sunil01090@gmail.com</p>
        </div>
        <input className='bg-gray-300 p-2 rounded-md' type="text" placeholder='Name' />
        <input type="text" className='my-4 p-2 bg-gray-300 rounded-md' placeholder='Email' />
        <textarea className='bg-gray-300 p-2 rounded-md' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-[1px] border-white hover:bg-orange-600 px-4 py-3 my-8 mx-auto rounded-md hover:border-orange-600 '>Send Mail</button>
      </form>
    </div>
  )
}

export default Contact