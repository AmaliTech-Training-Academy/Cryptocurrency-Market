import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CryptoMart from '../assets/logo crypto.svg'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [activePage, setActivePage] = useState("home")

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  return (
    <nav className='bg-gray-100 w-full  h-[77px] pl-[110px] pr-[115px] flex items-center justify-between'>
      <div className='w-[147px] h-[46px] flex justify-center items-center uppercase text-bold'>
        <img src={CryptoMart} alt="" />
      </div>
      <div className='w-[414px] h-[38px] ml-[-180px] p-[10px]'>
        <ul className='flex justify-between items-center text-[14.8px] font-normal text-[#101828]'>
          <NavLink to={"/dashboard"} id="nav-links">
              Home
            </NavLink>
            <NavLink to={"/view-crypto"} id="nav-links">
              Portfolio
            </NavLink>
            <NavLink to={"/active-crypto"} id="nav-links">
              Markets
            </NavLink>
            <NavLink to={"/faqs"} id="nav-links">
              Watchlist
            </NavLink>
            <NavLink to={"/developers"} id="nav-links">
              Developers
            </NavLink>
        </ul>
      </div>
      <div className='w-[171px] h-[39px]  flex justify-between'>
        <Link to="/login">
          <button className='w-[62px] h-[39px] border border-[#0C3C4C] rounded-lg text-base text-[#0C3C4C] font-normal'>Login</button>
        </Link>
        <Link to="/signup">
          <button className='w-[83px] h-[39px] border border-[#0C3C4C] rounded-lg text-base bg-[#0C3C4C] font-normal text-white'>Register</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar