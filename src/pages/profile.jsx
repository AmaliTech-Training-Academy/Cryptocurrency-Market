import React from "react";
import { NaviBar } from "../component";
import Pimg from '../assets/Profile-picture.png'
import Epi from '../assets/edit picture.svg'
import Home from '../assets/home vector.svg'
import Che from '../assets/chevron 1.svg'
import Psi from '../assets/Vector.svg'
import Plok from '../assets/lock vector.svg'
import notification from '../assets/Notification icon.svg'
import Phone from '../assets/countryCodes.json'
import { useFormik } from "formik";
import { basicSchema } from "../schema";

const profile = () => {
  const {values, handleBlur, handleChange} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: ""
    },
    validationSchema: basicSchema,
  })

  return (
    
    <div className="bg-[#FCFCFD] ">
      <NaviBar/>
      <div className="ml-[43px]">
        <div className="mt-2 flex items-center justify-center w-[261px] h-[30px]">
          <div className="mr-[25px]"><img src={Home} alt=""  className="w-[16px] h-[18px] "/></div>
          <div className="mr-[12px]"><img src={Che} alt="" className="w-[7px] h-[12px]" /></div>
          <h6 className=" w-[200px] h-[30px] text-[25px] font-normal flex justify-center items-center">Account settings</h6>
        </div>
        <div className="flex mt-[36px] ">
          <div className="w-[268px] h-[213px] bg-[rgba(255,255,255,0.05)] shadow   ">
            <div className="flex flex-col">
              <div className="flex items-center w-[268px] h-[39px] bg-red-600 mt-[26px] pl-8"> 
                <span className=" flex justify-center items-center w-[17px] h-[17px] border border-[#000000] rounded-full mr-8"><img src={Psi}alt=""  /></span > 
                Profile Settings
              </div>
              <div className=" flex items-center pl-8 mt-[36px]">
                <span  className=" flex justify-center items-center w-[17px] h-[17px]  mr-8"><img src={Plok} alt="" /></span>
                Password</div>
              <div className= " flex items-center pl-8 mt-[36px] mb-[35px]">
                <span className=" flex justify-center items-center w-[17px] h-[17px]  mr-8"><img src={notification} alt=""  className="w-[9px] h-[9px]"/></span>
                Notification</div>
            </div>
          </div>
          <div className="ml-[71px] w-[969px] h-[748px] bg-[rgba(255,255,255,0.05)] shadow">
            <div className="ml-[49px] mt-[32px]">
              <div className="w-[525px] h-[127px] flex justify-between items-center">
                <div className=" w-[127px] h-[127px] rounded-full relative">
                  <img src={Pimg} alt=""className="w-[127px] position" />
                  <div className="absolute flex justify-center align-middle right-[8px] bottom-[10px] w-6 h-6 bg-white rounded-full">

                  <img src={Epi} alt="" className="w-4"/>
                  </div>
                </div>
                <div className="flex flex-row items-start  gap-10">
                  <div className="w-[141px] h-[39px] bg-[#0C3C4C] ml-[90px] flex justify-center rounded">
                    <button className="text-[#FFFFFF] text-base font-normal text-center">
                      Upload New
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-start  gap-10">
                  <div className="w-[149px] h-[39px] bg-[#E4E7EC] flex justify-center rounded">
                    <button className="text-[#101828] text-base font-normal text-center">
                      Delete avatar
                    </button>
                  </div>
                </div>
              </div>

              {/* fields */}
              <div className="mt-[54px]">
                <div className="flex ">
                  <div className="flex flex-col ">
                    <label className=" text-[#000000] font-normal text-base ml-[10px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="border w-[360px] h-[44px] mt-[18px] mb-[26px] mr-[37px] pl-[15px] rounded "
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="ml-[10px]">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="border w-[360px] h-[44px] mt-[18px] mb-[26px] pl-[15px] rounded"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              {/* secondpart */}

              <div>
                <div className="flex ">
                  <div className="flex flex-col">
                    <label className="ml-[10px]">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="examples@gmail.com"
                      className="border w-[360px] h-[44px] mt-[18px]  mr-[37px] pl-[15px] rounded"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="ml-[10px]">Mobile Number</label>
                    <div className="flex w-[360px] h-[44px] border mt-[18px] rounded">
                      <select name="" id="" className="w-[25%]">
                        {Phone.map((item) => (
                          <option value={item.dial_code}>{`${item.flag} ${item.name} ${item.dial_code}`}</option>
                         ))}
                      </select>
                    <input
                      type="text"
                      placeholder="examples@gmail.com"
                      className="border  pl-[15px] rounded flex-1 h-full w-full"
                    />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[43px]">
                <label className="pb-[26px]">Gender</label>
                <div className="flex pt-[26px]">
                  <div className="flex flex-row ">
                    <div className="flex justify-between items-center pl-[16px] pr-[60px] w-[154px] h-[64px] border rounded mr-[19px]">
                      <input type="radio" className="w-[22px] h-[22px]" />
                      <div className="">Male</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row ">
                      <div className="flex justify-between items-center pl-[16px] pr-[51px] w-[154px] h-[64px] border rounded">
                        <input type="radio" className="w-[22px] h-[22px]" />
                        <div className="">Female</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[63px] ">
                <button className="bg-[#0C3C4C] w-[252px] h-[67px] rounded mb-[25px] text-white text-[16px]">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
