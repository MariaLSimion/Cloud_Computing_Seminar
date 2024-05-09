
import React from "react";

const About = () => {
 
  return(
    <div className="flex flex-col h-screen">
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="http://localhost:3000/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdGukF9JaWuBdyA3V5Nx0quqgdQ0VNzORh0rIlexkZg&s" class="h-8" alt="Virtual Shelf Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Virtual Shelf</span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a href="http://localhost:3000/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/create" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add a book</a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h2 class="text-4xl font-extrabold dark:text-white">Thank you for choosing Virtual Shelf!</h2>
    <p class="my-4 text-lg text-gray-500">Start managing your physical library virtually. Keep track of your books and reads with Virtual Shelf. </p>

<p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">With Virtual Shelf, book lovers discover their library management experience that is simple, intuitive and highly efficient. With this powerful app, you can easily add books to your library, information about them, and delete things as your library grows. But what really makes Virtual Shelf stand out is this filtering capability. Whether you want to explore books by genre - be it fantasy, mystery, romance or others - or do a quick analysis of their ownership status and city, this app gives you all the tools you need to organize your library and library. to bring your passion for books to a new level.</p>
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <img src="https://cdn-icons-png.flaticon.com/512/2436/2436890.png" style={{ width: '200px', height: '200px' }} alt="Virtual Shelf Logo" />
</div>

</div>

          </div>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Happy reading!</span> </h1>

</div>

          </div>
  )
};

export default About;