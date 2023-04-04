import React from 'react'
import bnb from '../assets/BNB.png'

const Viewarea = () => {
  return (
    <div className=''>
        <div className='w-[1208px] h-[231px] bg-[#e4e7ec] shadow ml-[130px] rounded '>
            <div className='ml-4'>
                <div className='flex mr-[83px]'>
                   <div className='flex mt-4'>
                   <div className='mr-2'><img src={bnb} alt="" /></div>
                    <div >BNB</div>
                   </div>
                    <div className='mt-4 ml-[150px]'>BNB</div>
                    <div className='mt-4 ml-[132px]'>$41,650,00</div>
                    <div className='mt-4 text-[#32D583] ml-[82px]'>+45.74%</div>
                    <div className='mt-4 ml-[162px]'>$715,650M</div>
                    <div className='mt-4 ml-[149px]'>$715,650M</div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Viewarea