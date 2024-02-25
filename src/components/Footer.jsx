import React from 'react'

const Footer = () => {
  return (
    

<footer class="bg-[#0a192f]  shadow-slate-500  dark:bg-gray-800 w-full h-[100px] m-auto">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Portfolio™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6 hover:text-orange-500">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6 hover:text-orange-500">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6 hover:text-orange-500">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline hover:text-orange-500">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer