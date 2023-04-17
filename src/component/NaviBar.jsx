import React, { useState,useRef,useEffect } from "react";
import Img1 from "../assets/logo crypto.svg";
import notification from "../assets/Notification icon.svg";
import Pimg from "../assets/Profile-picture.png";
import Down from "../assets/chevron.svg";
import Search from "../assets/search icon.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";


function NaviBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();

  const toggleFunc = () => {
    setToggleMenu(!toggleMenu);
  };

  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () =>{
      document.removeEventListener("mousedown", handler)
    }
  })

  const clearUser = () =>{
    dispatch(logoutUser())
  }


  return (
    <>
      <nav className="w-full h-[77px]  flex items-center justify-between border-b pr-[100px] pl-[47px]">
        <div className=" h-[46px] flex justify-center items-center">
          <img src={Img1} alt="" />
        </div>
        <ul className="flex justify-between  w-[353px] items-center text-[14.8px] font-normal text-[#101828]">
          <NavLink to={"/dashboard"} id="nav-links">
            Home
          </NavLink>
          <NavLink to={"/view-crypto"} id="nav-links">
            Portfolio
          </NavLink>
          <NavLink to={"/active-crypto"} id="nav-links">
            Markets
          </NavLink>
          <NavLink to={"/watchlist"} id="nav-links">
            Watchlist
          </NavLink>
          <NavLink to={"/developers"} id="nav-links">
            Developers
          </NavLink>
        </ul>
        <div className=" h-[36px] flex ">
          <div className="flex justify-between w-[15rem] px-[10px] items-center" ref={menuRef}>
            {<img src={Pimg} alt="" className="w-[31px] h-[31px] mr-2" />}
            <div className="w-[5rem] text-[10px] ">Smith Johnson</div>
            <img
              src={Down}
              alt=""
              className={`${
                toggleMenu && "rotate-[180deg]"
              } w-[2rem] cursor-pointer mr-20`}
              onClick={toggleFunc}
            />
            {toggleMenu && <div>
        <div className='w-[240px]  h-[80px] border border-[1px solid #F2F4F7] bg-[white] shadow absolute right-[2%] top-[10%] z-50'>
           <NavLink to="/" id="settings">
           <div className='border-b h-[40px] py-[10px] px-[12px] hover:bg-[#F2F4F7]'>Account Settings</div>
           </NavLink>
           <div className='border-b h-[40px] py-[10px] px-[12px] hover:bg-[#F2F4F7] cursor-pointer' onClick={clearUser} >Logout</div>
        </div>
    </div>}
          </div>
        </div>
        {/* <DropdownMenu /> */}
      </nav>
      {/* {toggleMenu && <DropdownMenu/>} */}
    </>
  );
}

export default NaviBar;
