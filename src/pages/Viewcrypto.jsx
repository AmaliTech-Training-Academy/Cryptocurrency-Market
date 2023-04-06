import React from 'react'
import { Assets, NaviBar, Viewarea } from '../component'

const Viewcrypto = () => {
  return (
    <div className='bg-[#FCFCFD]'>
            <NaviBar />
        <div className='container mx-auto h-[800px]'>
            <div className='mt-[65px] ml-[130px] w-[1178px]'>
                <div className=' flex justify-between'>
                    <h6 className='text-[#101828] text-[25px] font-bold'>My Portfolio</h6>
                    <button className='w-[87px] h-[38px] bg-[#0C3C4C] text-white text-[16px] rounded-lg'>Edit</button>
                </div>
            </div>
        
            <div className=' w-[1208px] h-[45px] pt-[11.8px] ml-[130px] border-b-[0.235999px] border-b-[#C1C1C1] mt-[39px] '>
                    <ul className='flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px] pr-[86px] pl-[34.8px]'>
                        <li>Name</li>
                        <li>Symbol</li>
                        <li>Price</li>
                        <li>24H Change</li>
                        <li>Total Supply</li>
                        <li className=''>Market Cap</li>
                    </ul>
                </div>
            <div>
                <Viewarea />
            </div>

            <div>
                {<Assets />}
            </div>
        </div>
    </div>
  )
}

export default Viewcrypto