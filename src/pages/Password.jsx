import React from 'react'
import { NaviBar } from '../component'
import Pimg from '../assets/Profile-picture.png'
import Epi from '../assets/edit picture.svg'
import Home from '../assets/home vector.svg'
import Che from '../assets/chevron 1.svg'
import Psi from '../assets/Vector.svg'
import Plok from '../assets/lock vector.svg'
import notification from '../assets/Notification icon.svg'


function Password() {
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
          
          {/* Profile picture */}
          <div className="ml-[71px] w-[969px] h-[748px] bg-[rgba(255,255,255,0.05)] shadow">
            <div className="ml-[280px] mt-[32px]">
              <div className="w-[525px] h-[127px] flex justify-between items-center">
                <div className=" w-[127px] h-[127px] rounded-full relative">
                  <img src={Pimg} alt=""className="w-[127px] position" />
                  <div className="absolute flex justify-center align-middle right-[8px] bottom-[10px] w-6 h-6 bg-white rounded-full">
                  <img src={Epi} alt="" className="w-4"/>
                  </div>
                </div>
              </div>

              {/* fields */}
              <div>
                <div className='mt-[34px] flex flex-col '>
                    <label >Current password*</label>
                    <input type="text" placeholder='Enter current password' className='border w-[360px] h-[44px] rounded-lg mt-[6px]' />
                    <p className='mt-[6px] text-[#F04438]'>Incorrect password. Try again !</p>
                    <label className='mt-[32px]'>New Password*</label>
                    <input type="password" placeholder='Create new passsword' className='border w-[360px] h-[44px] rounded-lg mt-[6px]' />
                    <label className='mt-[32px]'>Confirm new password*</label>
                    <input type="passwprd" placeholder='Confirm new password' className='border w-[360px] h-[44px] rounded-lg mt-[6px]' />
                    <button className='mt-[42px] w-[128px] h-[40px] bg-gradient-to-r from-[#0C3C4C] to-[#1495C0] rounded-lg ml-[235px]'>Save Changes</button>

                </div>
              </div>

             


              

             
              {/* <div className="mt-[63px] ">
                <button className="bg-[#0C3C4C] w-[252px] h-[67px] rounded mb-[25px]">
                  Save Changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Password