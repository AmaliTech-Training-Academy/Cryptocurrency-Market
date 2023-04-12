import React from 'react'
import bnb from '../assets/BNB.png'
import del from "../assets/delete.png"
import Up from "../assets/uparrow.png"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { deletePortfolio } from '../features/portfolio/portfolioSlice'

const Viewarea = ({id}) => {
  const {data} =useSelector((store)=>store.data)
  const portfolio = useSelector(store => store.portfolio.data)
  const all = data.data?.coins


const dispatch = useDispatch()

const deleteCrypto = (id) => {
  dispatch(deletePortfolio(id))
}
  return (
    <div className=''>
        <div className='container mx-auto h-[231px] bg-[#e4e7ec] shadow  rounded overflow-y-auto'>
       
          {
            portfolio && portfolio?.map((item)=>{
              return(
                <div  key={item.uuid} className='ml-4 relative'>
                <div className='flex pt-4 items-center relative'>
                   <div className='flex gap-[15.34px]'>
                      <img src={item.iconUrl} alt="" className='w-[27.14px] h-[27.14px] '/>
                      <span >{item.name}</span>
                   </div>
                  <div className='absolute left-[210px] 2xl:left-[260px]'>{item.symbol}</div>
                  <div className=' absolute left-[380px] 2xl:left-[495px]'>${Number(item.price).toFixed(2)}</div>
                  <div >
                    <img src={Up} alt="" className='absolute left-[620px] 2xl:left-[775px] top-5'/>
                    <span className='absolute left-[640px] 2xl:left-[800px] top-4 text-[#32D583]'>{item.change}%</span>
                  </div>
                  <div className='absolute right-[275px] 2xl:right-[320px]'>{item.listedAt}</div>
                  <div className='absolute right-[55px] '>{item.marketCap.slice(0,7)}M</div>
                </div>
                <div className="" onClick={()=>deleteCrypto(item.uuid)} >
                <img src={del} alt="" className='absolute right-0 top-5 cursor-pointer ' />
                </div>
            </div>
              )
})

}
        </div>
    </div>
  )
}

export default Viewarea