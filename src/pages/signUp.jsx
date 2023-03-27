import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import icon from "../assets/CryptoMart.svg";
import { Input } from "../component";
import { userSchema } from "../Validations/UserValidation";

const initialState = {
  email: "",
  password: "",
  confimPassword:"",
  isMember:true,
}

const login = () => {
  const [values,setValues] = useState(initialState)
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log({name,value});
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const isValid = await userSchema.isValid(values)
    console.log(isValid);
  }
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
              <form >
                <Input label="Email Address*" type='email' name='email' value={values.email} handleChange={handleChange} placeholder="Enter your email " />
                <Input label="Password*" type='password' name='password' value={values.password} handleChange={handleChange} placeholder="Enter your password " />
                <Input
                  label="Confirm Password*"
                  type='confirmPassword' name='confirmPassword' value={values.confirmPassword} handleChange={handleChange}
                  placeholder="Re-enter password "
                />
                <div className="mt-[46px]  h-[42px] text-center  ">
                  <button type="submit" onClick={(e)=>handleSubmit(e)} className=" h-[42px] w-[268px] rounded-lg bg-[#0c3c4cce] font-normal text-white text-[17px] mb-[16px]">
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
