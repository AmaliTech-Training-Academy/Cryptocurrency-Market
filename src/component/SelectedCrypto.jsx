import React,{useState} from 'react'
import graph from  "../assets/graph.png"
import yahoo from "../assets/logos_yahoo.svg" 
import del from '../assets/del.png'


const SelectedCrypto = () => {
const [toggle,setToggle] = useState(false)

const handleToggle = () =>{
    setToggle(!toggle)
}

  return (
    <div className="height w-[30%] pt-[46px] pl-[34px] pr-[59px] font-normal relative  border-r-2">
    <h1 className='mb-[18px]'>Business News</h1>
    <p className='text-[#7C7D7D] mb-[80px] '>From Yahoo Finance</p>
    <button className='bg-[#E4E7EC] w-[67px] h-[34px] rounded-xl mb-[34px]' onClick={handleToggle}>Edit</button>
    <div className="flex justify-between items-center w-full mb-3">
        <img className={`${toggle ? 'visible' : 'hidden'}`} src={del} alt="" />
        <div className="h-[35px] ">
            <h1 >Ethereum</h1>
            <p className='text-[#7C7D7D] text-[12px]'>Ethereum GBP</p>
        </div>
        <img src={graph} alt="" />
        <div className="">
        <h1>4,008.57</h1>
            <p className='bg-[#32D583] w-[67px] h-[34px] rounded-xl  text-[12px] flex justify-center items-center '>+1.30%</p>
        </div>
    </div>
    <div className="border"></div>
    <div className="bg-[#E4E7EC] fixed bottom-0 left-0 right-0 w-[29.87%] h-[59px] flex justify-evenly items-center">
        <div className="flex">
        <img src={yahoo} alt="" /><span className='font-bold'>finance</span>
        </div>
        <h1>Real Time Price</h1>
    </div>
</div>
  )
}

export default SelectedCrypto