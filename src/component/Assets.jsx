import React from 'react'

const Assets = () => {
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

    <div className='mt-[30px] ml-8 w-[772px] h-[60px] flex items-center hover:bg-[rgba(217,217,217,0.28)] p-[20px] cursor-pointer'>
     <div className=' mr-[130px] '>Bitcoin</div>
     <div className=' mr-[170px] '>BTC</div>
     <div className=' mr-[150px] ' >320</div>
     <div>$715,650M</div>
        </div>

        <div className='mt-[30px] ml-8 w-[772px] h-[60px] flex items-center  hover:bg-[rgba(217,217,217,0.28)] p-[20px] cursor-pointer mb-10'>
     <div className=' mr-[138px] '>Terra</div>
     <div className=' mr-[160px] '>LUNA</div>
     <div className='mr-[150px] '>320</div>
     <div>$715,650M</div>
        </div>

    </div>

  )
}

export default Assets