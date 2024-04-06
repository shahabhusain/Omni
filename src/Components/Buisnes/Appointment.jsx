import React from 'react'
import { features } from '../../assets'

const Appointment = () => {
  return (
    <>
    <div className=' w-full h-[2px] bg-[#f0efef] my-32'></div>
    <div className=' flex items-center justify-between  w-[80%] mx-auto'>
    <img className='' src={features} alt="" />
       <div className=' w-1/2 flex flex-col gap-2 ml-6'>
       <h1 className=' text-[#EF6A1F] text-[33px] font-bold'>Manage Appointment </h1>
        <div className=' w-[77px] h-[3px] bg-[#EF6A1F]'></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
rLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labon Read More...</p>
<button className=' bg-[#EF6A1F] py-2 px-6 rounded-full text-white w-fit mt-3'>start your fee trail</button>
       </div>
       
    </div>
    </>
  )
}

export default Appointment