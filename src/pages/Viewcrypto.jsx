import React from 'react'
import { Assets, NaviBar, Viewarea } from '../component'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Viewcrypto = () => {
    /* const {id} = useParams();
   const {data} =  useSelector((store)=>store.data)

   const exactItem = data.find((item) => item.uuid === id) */

  return (
    <div className='bg-[#FCFCFD]'>
            <NaviBar />
        <div className='container mx-auto h-[800px]'>
            <div className='mt-[65px] ml-[10px] w-[1178px]'>
                <div className=' flex justify-between'>
                    <h6 className='text-[#101828] text-[25px] font-bold'>My Portfolio</h6>
                </div>
            </div>
        
            <div >
            <div className='h-[45px] mt-[10px] pl-[24.8px] pr-[46.55px] pt-[11.8px] border-b-[0.235999px] border-b-[#C1C1C1]'>
          <ul className='flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px]'>
            <li>Name</li>
            <li>Symbol</li>
            <li>Price</li>
            <li>24H Change</li>
            <li>Total Supply</li>
            <li>Market Cap</li>
          </ul>
        </div>
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