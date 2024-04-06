import React from 'react'
import { Appstore, GooglePlayStore, Logo, dribble, instagram, twitter, youtube } from '../../assets'
const Footer = () => {
  return (
    < >
    <div className=' w-full h-[2px] bg-[#f0efef] mt-32'></div>
    <div className='w-[80%] mx-auto'>
    <div className=' flex justify-between py-12 '>
    <img src={Logo} alt="" />
    <div className=' flex flex-col gap-2'>
        <h1 className=' text-[22px] font-bold'>Company</h1>
        <p>About Us</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Contact</p>
    </div>
    <div className=' flex flex-col gap-2'>
        <h1 className=' text-[22px] font-bold'>Support</h1>
        <p>Help Center</p>
        <p>Safety Center</p>
        <p>Community Guidelines</p>
    </div>
    <div className=' flex flex-col gap-2'>
        <h1 className=' text-[22px] font-bold'>Installing App</h1>
        <div className=' flex items-center gap-4'>
            <img src={Appstore} alt="" />
            <img src={GooglePlayStore} alt="" />
        </div>
    </div>
   
</div>
 <div className=' w-full h-[2px] bg-[#f0efef]'></div>
 <div className=' flex items-center justify-between pb-12 mt-5'>
 <p>© 2023 omni. All rights reserved</p>
 <div className=' flex items-center gap-4'>
     <img src={youtube} alt="" />
     <img src={instagram} alt="" />
     <img src={dribble} alt="" />
     <img src={twitter} alt="" />
 </div>
</div>
</div>
    </>
  )
}

export default Footer