import React from 'react'
import icon from '../assets/CryptoMart.svg'
const login = () => {
  return (
    <div className='w-full flex justify-center items-center '>
      <div className="">
        <img src={icon} alt="" />
        <div className="shadow-inner w-[626px] flex flex-col justify-center items-center pt-[48px] pb-[55px] text-[#101828]">
          <div className="">
          <h2 className='text-[34px] font-normal mb-[25px] text-center'>Create Your Account </h2>
          <p className='mb-[25px] text-[21.52px] text-center'>Get Started For Free By Signing Up Now.</p>
          <h1 className='font-bold text-[rgba(12,60,76,0.81)] mb-[35.22px] text-center'>SIGN UP</h1>
          <form >
            <label htmlFor="" className='font-normal text-[20.7px]'>Email Address</label> <br />
            <input type="email" className='w-[339px] h-[51px] rounded-lg border-[rgba(83,53,45,0.5)] border-[1px]' placeholder=''/>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login