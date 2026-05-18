// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Navbar = () => {
//   return (
   
//     <nav className='flex justify-between py-4 px-6'>
//       <div className='text-2xl'>
//         <h2 className='text-3xl font-bold'>Logo<span className='text-lg'>MyLogo</span></h2>
//       </div>

//     <div>
//   <ul className='flex gap-8'>
//     <li className='px-4 py-2 text-gray-700 font-semibold hover:text-gray-800'><NavLink to="/about">About</NavLink></li>
//     <li className='px-4 py-2 text-gray-700 font-semibold hover:text-gray-800'><NavLink to="/experience">Portfolio</NavLink></li>

//     <li className='px-4 py-2 text-gray-700 font-semibold hover:text-gray-800'><NavLink to="/services">Services</NavLink></li>
//      <li className='px-4 py-2 text-gray-700 font-semibold hover:text-gray-800'><NavLink to="/contact">Contact</NavLink></li>
//   </ul>
// </div>

//  <div><button className='bg-[#a67c37] px-4 py-2 rounded-full text-white'>Contact</button></div>
//     </nav>
//   );
// };


// export default Navbar

// // bg-[#06070a]

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
// import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (

    <nav className='
      w-full
      sticky
  top-0
  z-50
      px-8
      py-5
      shadow-lg
      bg-white
    '>

      {/* Top Navbar */}
      <div className='flex items-center justify-between'>

        {/* Logo */}
        <div>
          <h1 className='text-2xl font-light tracking-widest'>
            MAP
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className='
          hidden
          md:flex
          items-center
          gap-10
          text-sm
          tracking-wide
        '>

          <li className='hover:text-gray-400 transition'>
            <NavLink to="/about">About</NavLink>
          </li>

          <li className='hover:text-gray-400 transition'>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>

          <li className='hover:text-gray-400 transition'>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li className='hover:text-gray-400 transition'>
            <NavLink to="/contact">Contact</NavLink>
          </li>

        </ul>

        {/* Desktop Contact Button */}
        <div className='hidden md:block'>
          <button className='
            text-white
            px-5
            py-2
            rounded-full
            bg-[#a67c37]
            hover:bg-white
            hover:text-[#a67c37]
            hover:border
            hover:border-[#a67c37]
            transition
            duration-300
            text-sm
          '>

            <NavLink to="/contact">
              Contact
            </NavLink>

          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >

          {
            isOpen
              ? < IoMdClose size={30} />
              : <FiMenu  size={30} />
          }

        </button>

      </div>

      {/* Mobile Menu */}
      {
        isOpen && (

          <div className='
            md:hidden
            absolute
            top-full
            left-0
            w-full
            bg-white
            shadow-lg
            mt-2
            p-6
            rounded-b-2xl
            flex
            flex-col
            gap-6
            text-lg
            z-50
          '>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/portfolio">Portfolio</NavLink>

            <NavLink to="/services">Services</NavLink>

            <NavLink to="/contact">Contact</NavLink>

            <button className='
              text-white
              bg-[#a67c37]
              py-3
              rounded-full
              mt-2
            '>

              <NavLink to="/contact">
                Contact
              </NavLink>

            </button>

          </div>

        )
      }

    </nav>

  )
}

export default Navbar