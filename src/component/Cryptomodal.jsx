import React from 'react'

function Cryptomodal() {
  return (
    <div className='w-[433px] h-[366px] bg-white rounded-[15px] relative border-2'>
      <span className='w-[86px] h-[86px] bg-[#6CE9A6] rounded-full flex justify-center items-center absolute top-[33px] right-[183px]'>
        <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 19.7761L2.625 11.9403L0 14.5522L10.5 25L33 2.61194L30.375 0L10.5 19.7761Z" fill="white"/>
        </svg>
      </span>
      <span className='font-bold text-xl absolute top-[167px] left-[58.5px]'>Cryptocurrency has been added</span>
      <span className='w-[252px] h-[38px] font-normal text-base text-black leading-[19px] text-center absolute top-[202px] left-[90.5px]'>Now you can view your cryptocurrencies in your portfolio</span>
      <div>
        <button className='w-[83px] h-[39px] bg-[rgba(108,233,166,0.5)] rounded-[30px] absolute top-[270px] left-[112px] font-bold text-base text-white'>View</button>
        <button className='w-[83px] h-[39px] bg-[#32d583] rounded-[30px] absolute top-[270px] left-[237px] font-bold text-base text-white'>Done</button>
      </div>
    </div>
  )
}

export default Cryptomodal