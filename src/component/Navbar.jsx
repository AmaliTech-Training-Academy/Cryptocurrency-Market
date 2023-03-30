import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-100 w-full h-[77px] pl-[110px] pr-[115px] flex items-center justify-between'>
      <div className='w-[147px] h-[46px] bg-red-400 flex justify-center items-center uppercase text-bold'>Crypto Logo</div>
      <div className='w-[414px] h-[38px] ml-[-180px] p-[10px]'>
        <ul className='flex justify-between items-center '>
          <li>Home</li>
          <li>Portfolio</li> 
          <li>Markets</li>
          <li>FAQs</li>
          <li>Developers</li>
        </ul>
      </div>
      <div className='w-[171px] h-[39px]  flex justify-between'>
        <button className='w-[62px] h-[39px] border border-[#0C3C4C] 
        rounded-lg text-base text-[#0C3C4C] font-normal'>Login</button>
        <button className='w-[83px] h-[39px] border border-[#0C3C4C] 
        rounded-lg text-base bg-[#0C3C4C] font-normal text-white'>Register</button>
      </div>
    </div>
  )
}

export default Navbar