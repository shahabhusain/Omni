import React from 'react'
import { Logo } from '../../assets'

const Header = () => {
  return (
    <div className=' shadow-sm py-4'>
        <div className=' flex items-center justify-between w-[80%] mx-auto'>
        <img className=' w-[75px]' src={Logo} alt="" />
        <div>
            <ul className=' flex items-center gap-8'>
                <li>Help Center</li>
                <li>About Us</li>
                <li>Safety Center</li>
                <li>Contact Us</li>
                <li>Communication Guidlines</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header