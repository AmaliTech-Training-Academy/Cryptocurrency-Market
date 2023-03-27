import React from 'react'
import icon from '../assets/CryptoMart.svg'
const login = () => {
  return (
    <div className='w-full flex justify-center items-center '>
      <div className="">
        <img src={icon} alt="" />
        <div className="shadow-inner w-[626px] flex flex-col justify-center items-center pt-[48px] pb-[55px] text-[#101828]">
          <h2 className='text-[34px] font-normal mb-[25px]'>Create Your Account </h2>
          <p className='mb-[25px] text-[21.52px]'>Get Started For Free By Signing Up Now.</p>
          <h1>SIGN UP</h1>
        </div>
      </div>
    </div>
  )
}

export default login