import React from 'react'
import { features } from '../../assets'
const Features = () => {
  return (
    <div className=' w-[80%] mx-auto flex flex-col gap-2 items-center justify-center '>
        <h1 className=' text-[43px] font-bold pt-11'><span className='text-[#EF6A1F]'>Features</span> We Provide</h1>
        <div className=' w-[226px] h-[3px] bg-[#EF6A1F]'></div>
        <p className=' max-w-[655px] text-center'>Vorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labVveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <div className=' flex items-center justify-between mt-14'>
           <div className=' w-1/2 flex flex-col gap-2'>
           <h1 className=' text-[#EF6A1F] text-[33px] font-bold'>Order Management</h1>
            <div className=' w-[77px] h-[3px] bg-[#EF6A1F]'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
 rLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labon Read More...</p>
 <button className=' bg-[#EF6A1F] py-2 px-6 rounded-full text-white w-fit mt-3'>start your fee trail</button>
           </div>
           <img className='' src={features} alt="" />
        </div>
    </div>
  )
}

export default Features