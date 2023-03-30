import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CryptoMart from '../assets/logo crypto.svg'

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
          <li className={`${activePage === "home" ? "border-[#93FCEC] border-b-2" : "" }`} onClick={() => handlePageChange("home")}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${activePage === "portfolio" ? "border-[#93FCEC] border-b-2" : ""}`} onClick={() => handlePageChange("portfolio")}>
            <Link to="/">Portfolio</Link>
          </li> 
          <li className={`${activePage === "markets" ? "border-[#93FCEC] border-b-2" : ""}`} onClick={() => handlePageChange("markets")}>
            <Link to="/">Markets</Link>
          </li>
          <li className={`${activePage === "faqs" ? "border-[#93FCEC] border-b-2" : ""}`} onClick={() => handlePageChange("faqs")}>
            <Link to="/">FAQs</Link>
          </li>
          <li className={`${activePage === "developers" ? "border-[#93FCEC] border-b-2" : ""}`} onClick={() => handlePageChange("developers")}>
            <Link to="/">Developers</Link>
          </li>
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