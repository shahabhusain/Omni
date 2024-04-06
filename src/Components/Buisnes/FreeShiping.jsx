import React from 'react'
import { Question } from '../../assets'

const FreeShiping = () => {
  return (
   <div className=' w-[80%] mx-auto '>
     <div className=' grid grid-cols-4 gap-4 bg-white py-8 px-12 rounded-full shadow-md  '>
       <div className=' flex items-center gap-4'>
       <img src={Question} alt="" />
        <div className=''>
            <h1 className=' font-bold'>Free Shipping</h1>
            <p className=' text-[12px] text-[#999999]'>Free shipping on all your order</p>
        </div>
       </div>
       <div className=' flex items-center gap-4'>
       <img src={Question} alt="" />
       <div className=''>
            <h1 className=' font-bold'>Free Shipping</h1>
            <p className=' text-[12px] text-[#999999]'>Free shipping on all your order</p>
        </div>
       </div>
       <div className=' flex items-center gap-4'>
       <img src={Question} alt="" />
       <div className=''>
            <h1 className=' font-bold'>Free Shipping</h1>
            <p className=' text-[12px] text-[#999999]'>Free shipping on all your order</p>
        </div>
       </div>
       <div className=' flex items-center gap-4'>
       <img src={Question} alt="" />
       <div className=''>
            <h1 className=' font-bold'>Free Shipping</h1>
            <p className=' text-[12px] text-[#999999]'>Free shipping on all your order</p>
        </div>
       </div>
    </div>
   </div>
  )
}

export default FreeShiping