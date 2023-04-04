import React from 'react'
import bnb from '../assets/BNB.png'

const Viewarea = () => {
  return (
    <div className=''>
        <div className='w-[1208px] h-[433px] bg-[#e4e7ec] shadow ml-[130px] mb-[50px] '>
            <div className='ml-4'>
                <div className='flex justify-between mr-[83px]'>
                   <div className='flex mt-4'>
                   <div><img src={bnb} alt="" /></div>
                    <div>BNB</div>
                   </div>
                    <div className='mt-4'>BNB</div>
                    <div className='mt-4'>$41,650,00</div>
                    <div className='mt-4 text-[#32D583]'>+45.74%</div>
                    <div className='mt-4'>$715,650M</div>
                    <div className='mt-4'>$715,650M</div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Viewarea