import React from 'react'

export const Navbar = () => {
  return (
    <nav className="bg-transparent p-6 w-max  mx-auto">

      <div className="container mx-auto flex justify-between items-center space-x-10">

        <div className="text-white text-lg font-semibold">
          Pritech Solutions
        </div>


        <ul className="flex space-x-10">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Client</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Projects</a>
          </li>
           <li>
            <a href="/contact" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
          

        </ul>
      </div>
    </nav>
  )
}
