import React from 'react'
import bnb from '../assets/BNB.png'
import del from "../assets/delete.png"
import Up from "../assets/uparrow.png"

const Viewarea = () => {
  return (
    <div className=''>
        <div className='container mx-auto h-[231px] bg-[#e4e7ec] shadow  rounded '>
            <div className='ml-4 relative'>
                <div className='flex  bg-yellow-100 pt-4 items-center relative'>
                   <div className='flex'>
                      <img src={bnb} alt="" className='mr-2'/>
                      <span >BNB</span>
                   </div>
                  <div className='absolute left-[210px] 2xl:left-[260px]'>BNB</div>
                  <div className=' absolute left-[380px] 2xl:left-[480px]'>$41,650,00</div>
                  <div >
                    <img src={Up} alt="" className='absolute left-[580px] 2xl:left-[740px] top-5'/>
                    <span className='absolute left-[610px] 2xl:left-[770px] top-4 text-[#32D583] '>+45.74%</span>
                  </div>
                  {<div className='absolute right-[300px] 2xl:right-[355px]'>$715,650M</div>}
                  {<div className='absolute right-[55px] '>$715,650M</div>}
                </div>
                <img src={del} alt="" className='absolute right-0 top-5'/>
            </div>

        </div>
    </div>
  )
}

export default Viewarea