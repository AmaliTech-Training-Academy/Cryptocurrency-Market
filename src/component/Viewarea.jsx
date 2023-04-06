import React from 'react'
import bnb from '../assets/BNB.png'
import del from "../assets/delete.png"
import Up from "../assets/uparrow.png"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const Viewarea = ({id}) => {
  const {data} =useSelector((store)=>store.data)
  const [info,setInfo] = useState([])
  const all = data.data?.coins
  const filter = all?.filter((item)=>item.uuid === id)
  const deleteFilter = info?.filter((item)=>item.uuid !== id)

useEffect(()=>{
setInfo(filter)
},[id])

const deleteCrypto = () => {
  setInfo(deleteFilter)
}

  return (
    <div className=''>
        <div className='container mx-auto h-[231px] bg-[#e4e7ec] shadow  rounded '>
          {
            info && info?.map((item)=>{
              return(
                <div className='ml-4 relative'>
                <div className='flex pt-4 items-center relative'>
                   <div className='flex'>
                      <img src="{item.iconUrl}" alt="" className='w-20  hover:cursor-pointer '/>
                      <span >{item.name}</span>
                   </div>
                  <div className='absolute left-[210px] 2xl:left-[260px]'>{item.symbol}</div>
                  <div className=' absolute left-[380px] 2xl:left-[480px]'>${Number(item.price).toFixed(2)}</div>
                  <div >
                    <img src={Up} alt="" className='absolute left-[580px] 2xl:left-[740px] top-5'/>
                    <span className='absolute left-[610px] 2xl:left-[770px] top-4 text-[#32D583] '>{item.change}%</span>
                  </div>
                  {<div className='absolute right-[300px] 2xl:right-[355px]'>$715,650M</div>}
                  {<div className='absolute right-[55px] '>$715,650M</div>}
                </div>
                <div className="" onClick={deleteCrypto} >
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