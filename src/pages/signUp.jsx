import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/CryptoMart.svg";
import { Input } from "../component";
const login = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="">
        <img src={icon} alt=""  className="ml-[200px]"/>
        <div className="shadow-inner w-[626px] flex flex-col justify-center items-center pt-[48px] pb-[55px] text-[#101828]">
          <div className="">
            <h2 className="text-[34px] font-normal mb-[25px] text-center">
              Create Your Account{" "}
            </h2>
            <p className="mb-[25px] text-[21.52px] text-center">
              Get Started For Free By Signing Up Now.
            </p>
            <div className=" flex flex-col justify-center items-center">
              <h1 className="font-bold text-[rgba(12,60,76,0.81)] text-[22px] mb-[35.22px] text-center">
                SIGN UP
              </h1>
              <form>
                <Input label="Email Address*" placeholder="Enter your email " />
                <Input label="Password*" placeholder="Enter your password " />
                <Input
                  label="Confirm Password*"
                  placeholder="Re-enter password "
                />
                <div className="mt-[46px]  h-[42px] text-center  ">
                  <button className=" h-[42px] w-[268px] rounded-lg bg-[#0c3c4cce] font-normal text-white text-[17px] mb-[16px]">
                    Sign Up
                  </button>
                  <p>Already have an account?<Link to='/login' className="text-[#0000ffb3]">LogIn</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
