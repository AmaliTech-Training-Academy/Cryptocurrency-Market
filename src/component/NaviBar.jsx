import React from 'react'
import Img1 from '../assets/logo crypto.svg'
import notification from '../assets/Notification icon.svg'
import Pimg from '../assets/Profile-picture.png'
import Down from '../assets/chevron.svg'
import Search from '../assets/search icon.svg'





function NaviBar() {
  return (
    <nav className='w-full h-[77px]  flex items-center justify-between border-b pr-[100px] pl-[47px]'>
        <div className=' h-[46px] flex justify-center items-center uppercase text-bold '>
        <img src={Img1} alt="" />
        </div>
        <div className=''>
        <ul className='flex justify-between  w-[273px] items-center text-[14.8px] font-normal text-[#101828]'>
            <li className='mr-8' >Home</li>
            <li className='mr-8'>Portfolio</li>
            <li className='mr-8'>Markets</li>
            <li className='mr-8'>FAQs</li>
            <li>Developers</li>
        </ul>
        </div>
        <div className=' h-[36px] flex justify-between w-[300px] mr-[140px]'>
        <div className='relative w-[304px] h-[36px] '>
            <div className='absolute top-0 left-0 h-full '><img  src={Search} alt=""  className='h-full pl-[20px]'/></div>
            <input type="text" placeholder="Search..." className='h-full border-[1px] bg-[#FFFFFF] rounded pl-[63px] '/>
            </div>
            <div className='flex flex-row  items-center ml-[25px] w-[89px]'>
            <img src={notification}  alt=""  className='w-[18px] h-[18.67px] '/>
            <img src={Pimg} alt="" className='w-[31px] h-[31px] ml-[30px]' />
            <img src={Down} alt=""  className='ml-[10px] '/>
            </div>
        </div>
    </nav>
  )
}

export default NaviBar