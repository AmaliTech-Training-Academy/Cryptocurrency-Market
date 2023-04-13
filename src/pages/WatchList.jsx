import React from 'react'
import { CryptoGraphs, NaviBar } from '../component'
import graph from  "../assets/graph.png"
const WatchList = () => {
  return (
    <div>
        <NaviBar/>
        <div className="flex justify-between">
<div className="height w-[25%] pt-[46px] pl-[34px] pr-[59px] font-normal">
    <h1 className='mb-[18px]'>Business News</h1>
    <p className='text-[#7C7D7D] mb-[80px] '>From Yahoo Finance</p>
    <button className='bg-[#E4E7EC] w-[67px] h-[34px] rounded-xl mb-[34px]'>Edit</button>
    <div className="flex justify-between items-center w-full mb-3">
        <div className="h-[35px] ">
            <h1 >Ethereum</h1>
            <p className='text-[#7C7D7D] text-[12px]'>Ethereum GBP</p>
        </div>
        <img src={graph} alt="" />
        <div className="">
        <h1>4,008.57</h1>
            <p className='bg-[#32D583] w-[67px] h-[34px] rounded-xl  text-[12px] flex justify-center items-center '>+1.30%</p>
        </div>
    </div>
    <div className="border"></div>
</div>
<div className="w-[70%] mt-[38px] pr-10">
    <CryptoGraphs />
</div>

        </div>
    </div>
  )
}

export default WatchList