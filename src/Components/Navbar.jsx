import React from 'react'
import logo from '../Assests/Talentxlogo.png'

export const Navbar = () => {
  return (
    <div className='bg-white w-full text-balck py-2'>
      <div className='max-w-[95%] pe-[50px] mx-auto grid grid-cols-12 itens-center'>
        {/* Left Section */}
        <div className='col-span-5'>
          <img src={logo} alt="" className='w-auto h-12' />
        </div>

        {/* Center Section */}
        <div className='col-span-5 mt-4'>
        <ul className="flex flex-wrap justify-between items-center text-center md:text-left">
            <li className="w-1/2 md:w-auto my-1 md:my-0">
              <a href="/Insights" className="hover:text-gray-400">Insights</a>
            </li>
            <li className="w-1/2 md:w-auto my-1 md:my-0">
              <a href="/solutions" className="hover:text-gray-400">Tools</a>
            </li>
            <li className="w-1/2 md:w-auto my-1 md:my-0">
              <a href="/research" className="hover:text-gray-400">Research</a>
            </li>
            <li className="w-1/2 md:w-auto my-1 md:my-0">
              <a href="/about-us" className="hover:text-gray-400">About us</a>
            </li>
            <li className="w-1/2 md:w-auto my-1 md:my-0">
              <a href="/contact" className="hover:text-gray-400">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='col-span-2 mt-4 flex justify-end'>
          <button className='bg-[#8B53FF] px-2 px-6 text-white'> <a href="/contact">LOGIN</a></button>
       
        </div>
      </div>
    </div>
  )
}
