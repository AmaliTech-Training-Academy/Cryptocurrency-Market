import React from 'react'

const Assets = () => {
  return (
    <div className=' ml-[130px]'>
        <div className='mt-[48px] w-[1208px]'>
          <h6 className='text-[25px] font-bold text-[#101828]'>My Assets</h6>
        </div>
    
    <div className='mt-[19px] ml-8 w-[700px] border-b flex space-x-32 text-[18px] font-normal'>
   <div>Name</div>
   <div>Symbol</div>
   <div>Quantity</div>
   <div>Purchase Price</div>
    </div>

    <div className='mt-[30px] ml-8 w-[772px] h-[60px] flex items-center space-x-36 hover:bg-[rgba(217,217,217,0.28)] p-[20px] cursor-pointer'>
     <div>Bitcoin</div>
     <div>BTC</div>
     <div >320</div>
     <div>$715,650M</div>
        </div>

        <div className='mt-[30px] ml-8 w-[772px] h-[60px] flex items-center space-x-36 hover:bg-[rgba(217,217,217,0.28)] p-[20px] cursor-pointer'>
     <div>Terra</div>
     <div >LUNA</div>
     <div >320</div>
     <div>$715,650M</div>
        </div>

    </div>

  )
}

export default Assets