import React from 'react'
import { Logo } from '../../assets'

const Header = () => {
  return (
   <div className=' w-full sticky top-0 bg-white shadow-sm'>
     <div className=' w-[80%] mx-auto flex items-center justify-between py-3'>
        <img className=' w-[70px]' src={Logo} alt="" />
        <div className=' flex items-center gap-5'>
            <li className=' list-none cursor-pointer btn1'>Home</li>
            <li className=' list-none cursor-pointer btn1'>About Us</li>
            <li className=' list-none cursor-pointer btn1'>Packages</li>
            <li className=' list-none cursor-pointer btn1'>Contact Us</li>
        </div>
        <div className=' flex items-center gap-5'>
        <button className='bg-[#EFEFEF] py-2 px-6 rounded-full'>Log In</button>
        <button className=' bg-[#EF6A1F] py-2 px-6 rounded-full text-white'>Register your bussiness</button>
        </div>
    </div>
   </div>
  )
}

export default Header