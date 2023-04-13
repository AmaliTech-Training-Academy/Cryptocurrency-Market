import React from 'react'
import { useSelector } from 'react-redux'

const Assets = () => {
  const {data} = useSelector((store)=>store.asset)
  console.log(data);
  return (
    <div className=' ml-[10px]'>
        <div className='mt-[48px] w-[1208px]'>
          <h6 className='text-[25px] font-bold text-[#101828]'>My Assets</h6>
        </div>
    
    <div className='mt-[19px] ml-8 w-[710px] border-b flex justify-center text-[18px] font-normal'>
   <div className=' mr-[138px] '>Name</div>
   <div className=' mr-[138px] '>Symbol</div>
   <div className='mr-[100px]'>Quantity</div>
   <div>Purchase Price</div>
    </div>

    
{
  data && data.map((item)=>{
    return(
      <div className='mt-[30px] ml-8 w-[772px] h-[60px] flex items-center relative hover:bg-[rgba(217,217,217,0.28)] p-[20px] cursor-pointer mb-10'>
        <Link to ={'/view-stats'}><div className=' '>{item.assetName}</div>
        <div className=' absolute left-[210px] 2xl:left-[210px] '>{item.symbol}</div>
        <div className='absolute left-[420px] 2xl:left-[420px] '>{item.quantity}</div>
        <div className='absolute left-[590px] 2xl:left-[590px]'>${item.purchasePrice}</div>
        </Link>
      </div>
    )
 })
}
    </div>

  )
}

export default Assets