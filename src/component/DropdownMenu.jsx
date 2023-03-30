import React from 'react'
import { NavLink } from 'react-router-dom'

const DropdownMenu = () => {
  return (
    <div>
        <div className='w-[240px]  h-[187px] border border-[1px solid #F2F4F7] bg-[white] shadow absolute right-[2%] top-[10%] z-50'>
           <NavLink to="/profile-page">
           <div className='border-b h-[40px] py-[10px] px-[12px]'>Account Settings</div>
           </NavLink>
           <div className='border-b h-[40px] py-[10px] px-[12px]'>Notification Settings</div>
           <div className='border-b h-[40px] py-[10px] px-[12px]'>Logout</div>
        </div>
    </div>
  )
}

export default DropdownMenu