import React from 'react'

const Statistics = () => {
  return (
    <div className='p-4 mb-[69px] shadow'>
        <h1 className='text-[25px] mb-[10px]'>Statistics</h1>
        <div className="flex justify-between mb-4">

        <div className="flex w-[170px] justify-between items-baseline">
            <h2 className="text-[21px]">Bitcoin</h2>
            <p>BTC/USD</p>
        </div>
        <div className="flex  w-[170px] justify-between items-center">
            <h2 className="text-[21px]">us$155.00</h2>
            <p className='text-[red]'>-0.85</p>
        </div>
        </div>
        <div className="border-b"></div>
    </div>
  )
}

export default Statistics