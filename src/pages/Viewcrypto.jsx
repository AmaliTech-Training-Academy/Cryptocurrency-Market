import React from 'react'
<<<<<<< HEAD
import { Assets, NaviBar, Viewarea } from '../component'
=======
import { NaviBar, Viewarea } from '../component'
>>>>>>> 6d4a149 (feature:viewcrypto page first part styling done)

const Viewcrypto = () => {
  return (
    <div className='bg-[#FCFCFD]'>
            <NaviBar />
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='container mx-auto h-[800px]'>
=======
        <div className='container mx-auto h-[976px]'>
>>>>>>> 6d4a149 (feature:viewcrypto page first part styling done)
=======
        <div className='container mx-auto h-[800px]'>
>>>>>>> f514682 (feature: styles for viewcrypto done)
            <div className='mt-[65px] ml-[130px] w-[1178px]'>
                <div className=' flex justify-between'>
                    <h6 className='text-[#101828] text-[25px] font-bold'>My Portfolio</h6>
                    <button className='w-[87px] h-[38px] bg-[#0C3C4C] text-white text-[16px] rounded-lg'>Edit</button>
                </div>
            </div>



            <div className='ml-[130px] mt-[28px]  flex '>
                <div>
                    <div className='text-[#515253] mr-[89px]'>Total Balance</div>
                    <div className='text-[#101828] ml-[20px] mt-[23px]'>$0</div>
                </div>

                <div>
                    <div className='text-[#515253] mr-[89px]'>Available</div>
                    <div className='text-[#101828] mt-[23px] ml-[20px]'>$0</div>
                </div>
                <div>
                    <div className='text-[#515253]'>Open orders</div>
                    <div className='text-[#101828] mt-[23px] ml-[20px] '>-</div>
                </div>
            </div>
    
        
<<<<<<< HEAD
            <div className=' w-[1208px] h-[45px] pt-[11.8px] ml-[130px] border-b-[0.235999px] border-b-[#C1C1C1] mt-[39px] '>
                    <ul className='flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px] pr-[86px] pl-[34.8px]'>
=======
            <div className=' w-[1208px] h-[45px] pt-[11.8px] ml-[130px] border-b-[0.235999px] border-b-[#C1C1C1] mt-[63px] '>
<<<<<<< HEAD
                    <ul className='flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px] pr-[86px]'>
>>>>>>> 6d4a149 (feature:viewcrypto page first part styling done)
=======
                    <ul className='flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px] pr-[86px] pl-[34.8px]'>
>>>>>>> f514682 (feature: styles for viewcrypto done)
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
<<<<<<< HEAD

            <div>
                {<Assets />}
            </div>
=======
>>>>>>> 6d4a149 (feature:viewcrypto page first part styling done)
        </div>
    </div>
  )
}

export default Viewcrypto