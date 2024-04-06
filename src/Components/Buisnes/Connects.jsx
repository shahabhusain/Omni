import React from 'react'
import { connects } from '../../assets'

const Connects = () => {
  return (
    <div className=' flex items-center gap-12  justify-between w-[80%] mx-auto mt-32'>
       <div className=' w-1/2'>
       <h1 className=' text-[33px] font-bold'><span className=' text-[#EF6A1F]'>OMNI</span> Connects</h1>
        <p> the beauty and wellness industry, to transform and elevate your business.</p>
        <div className=' flex flex-col gap-5 mt-6'>
        <div className=' bg-[#F8F8F8] py-5 px-4 rounded-xl'>
            <h1 className=' text-[19px] font-semibold'><span className=' text-[#EF6A1F]' >Increase</span> Revenues:</h1>
            <p>With Our Management system that allows you to make business decisions on time.</p>
        </div>
        <div className=' bg-[#F8F8F8] py-5 px-4 rounded-xl'>
            <h1 className=' text-[19px] font-semibold'><span className=' text-[#EF6A1F]' >Unparalleled</span> Visibility:</h1>
            <p>Manage your appointments, cancellations and receive payments for your services in just one place.</p>
        </div>
        <div className=' bg-[#F8F8F8] py-5 px-4 rounded-xl'>
            <h1 className=' text-[19px] font-semibold'><span className=' text-[#EF6A1F]' >Maximize</span> Profitability:</h1>
            <p>With our exclusive beauty and wellness search engine, your business will appear in our search page for potential customers around your area..</p>
        </div>
        <div className=' bg-[#F8F8F8] py-5 px-4 rounded-xl'>
            <h1 className=' text-[19px] font-semibold'><span className=' text-[#EF6A1F]' >Customer</span> Acquisition Made Seamless:</h1>
            <p>Join our exclusive beauty and wellness community and connect with customers, suppliers, beauty experts and more for FREE</p>
        </div>
        </div>
       </div>
       <img className='w-[45%]' src={connects} alt="" />
    </div>
  )
}

export default Connects