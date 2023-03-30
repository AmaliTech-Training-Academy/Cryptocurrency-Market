import React, { useState } from "react";
import Img1 from "../assets/logo crypto.svg";
import notification from "../assets/Notification icon.svg";
import Pimg from "../assets/Profile-picture.png";
import Down from "../assets/chevron.svg";
import Search from "../assets/search icon.svg";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

function NaviBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleFunc = () => {
    setToggleMenu(!toggleMenu);
  };



  return (
    <>
      <nav className="w-full h-[77px]  flex items-center justify-between border-b pr-[100px] pl-[47px]">
        <div className=" h-[46px] flex justify-center items-center">
          <img src={Img1} alt="" />
        </div>
        <ul className="flex justify-between  w-[353px] items-center text-[14.8px] font-normal text-[#101828]">
          <NavLink to={"/profile-page"} id="nav-links">
            Home
          </NavLink>
          <NavLink to={"/password"} id="nav-links">
            Portfolio
          </NavLink>
          <NavLink to={"/markets"} id="nav-links">
            Markets
          </NavLink>
          <NavLink to={"/faqs"} id="nav-links">
            FAQs
          </NavLink>
          <NavLink to={"/developers"} id="nav-links">
            Developers
          </NavLink>
        </ul>
        <div className=" h-[36px] flex justify-between">
          <div className="relative w-[304px] h-[36px] ">
            <div className="absolute top-0 left-0 h-full ">
              <img src={Search} alt="" className="h-full pl-[20px]" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="h-full border-[1px] bg-[#FFFFFF] rounded pl-[63px] "
            />
          </div>
          <div className="flex justify-between w-[15rem] px-[10px] items-center">
            {
              <img
                src={notification}
                alt=""
                className="w-[18px] h-[18.67px] "
              />
            }
            {<img src={Pimg} alt="" className="w-[31px] h-[31px]" />}
            <div className="w-[5rem] text-[10px]">Smith Johnson</div>
            <img
              src={Down}
              alt=""
              className={`${
                toggleMenu && "rotate-[180deg]"
              } w-[2rem] cursor-pointer`}
              onClick={toggleFunc}
            />
          </div>
        </div>
        {/* <DropdownMenu /> */}
      </nav>
      {toggleMenu && <DropdownMenu/>}
    </>
  );
}

export default NaviBar;
