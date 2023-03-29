import React from 'react'
import { Navbar,Footer } from '../component'
import Play from "../assets/Play.svg"
import Hero from "../assets/hero 1.png"
import Img1 from "../assets/Group 55.svg"
import Img2 from "../assets/Group 58.svg"
import Img3 from "../assets/Group 56.svg"
import Img4 from "../assets/Group 57.svg"
import Hero1 from "../assets/hero.png"
import Chevron from "../assets/chevron.svg"
import Bitcoin from "../assets/bitcoin.png"
import Ethereum from "../assets/Group 61.svg"
import DogeCoin from "../assets/Group 60.svg"
import USCoin from "../assets/Group 62.svg"





const landingPage = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div className='h-[663.91px] bg-gradient-to-b from-[#0C3C4C] to-transparent via-[rgba(12,60,76,0.6077)]  pl-[109px] pt-[86.91px] relative'>
          <h1 className='w-[795px] h-[74px] font-bold text-white text-[61.04px] leading-[74px]'>Finding Your Perfect Niche</h1>
          <h4 className='w-[823px] h-[164px] font-normal text-white text-[25px] leading-[41px] mt-[34px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          <div className='w-[638px] h-[86px] mt-[69.44px] flex justify-between'>
            <button className='w-[243px] h-[86px] rounded-[10px] font-normal text-[31.25px] text-white text-center border border-[#93FCEC]'>Explore More</button>
            <button className='w-[311px] h-[86px] rounded-[8px] font-normal text-[31.25px] text-white text-center bg-[rgba(12,60,76,0.722776)] border border-[#32D583] flex justify-center items-center gap-4'>
              <span className='w-[60px] h-[60px] rounded-full border border-[#93FCEC] flex justify-center items-center'><img src={Play} alt="" className='w-[18px] h-[24.06px]'/> </span>
              Watch video
            </button>
          </div>
          <img src={Hero} alt="" className='absolute top-0 right-0'/>
        </div>
        <div className='px-[89px] pt-[70px]'>
          <div className='flex justify-between'>
            <div className='w-[737.99px] h-[692.66px] grid grid-rows-2 grid-cols-2 gap-y-[26.76px] gap-x-[34.93px]'>
              <div className='square'>
                <img src={Img1} alt="" className='icon'/>
                <h3 className='text'>Easy Use</h3>
                <h2 className='text1'>Lorem ipsum dolor sit amet, consectetur. <br></br>Lorem ipsum dolor sit amet, consectetur.</h2>
              </div>
              <div className='square'>
                <img src={Img2} alt="" className='icon'/>
                <h3 className='text'>Save Transactions</h3>
                <h2 className='text1'>Lorem ipsum dolor sit amet, consectetur. <br></br>Lorem ipsum dolor sit amet, consectetur.</h2>
              </div>
              <div className='square'>
                <img src={Img3} alt="" className='icon'/>
                <h3 className='text'>Trusted Security</h3>
                <h2 className='text1'>Lorem ipsum dolor sit amet, consectetur. <br></br>Lorem ipsum dolor sit amet, consectetur.</h2>
              </div>
              <div className='square'>
                <img src={Img4} alt="" className='icon'/>
                <h3 className='text'>Trading Platform</h3>
                <h2 className='text1'>Lorem ipsum dolor sit amet, consectetur. <br></br>Lorem ipsum dolor sit amet, consectetur.</h2>
              </div>
            </div>
            <div className='w-[439px] h-[692.66px]'>
              <div className='[w-337px] h-[42px] flex items-center justify-start gap-[10.1px]'>
                <div className='w-[107.69px] border-2 border-[#93FCEC]'></div>
                <h3 className='font-normal text-[35.0567px] leading-[42px] text-center text-[#101828]'>Crypt feature</h3>
              </div>
              <div>
                <h3 className='font-normal text-[35.0567px] leading-[42px] text-[#101828] pt-[21.94px]'>The most Trusted and Secure Cryptocurrency Platform</h3>
                <h2 className='font-normal text-[29.0593px] leading-[35px] text-[#7C7D7D] pt-[21.06px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
              </div>
              <button className='w-[215px] h-[58px] bg-[#0C3C4C] border border-[#93FCEC] rounded-[10px] font-normal text-[31.35px] text-[#E4E7EC] mt-[87px]'>Explore More</button>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='mt-[67.34px]'>
              <div className='flex justify-center items-center gap-[2px]'>
                <span className='w-[100px] border-b border-2 border-[#93FCEC]'></span>
                <h5 className='font-normal text-[25px] leading-[30px] text-[#101828]'>Live Prices</h5>
                <span className='w-[100px] border-b border-2  border-[#93FCEC]'></span>
              </div>
                <h3 className='font-normal text-[31.25px] leading-[38px] text-black'>Crypto Live market Prices</h3>
            </div>
          </div>
          <div className='w-[1251px] h-[609px] mt-[80px] grid grid-rows-2 grid-cols-2 gap-x-[59px] gap-y-[37px]'>
            <div className='main'>
              <img src={Bitcoin} className='w-[73px] h-[73px] rounded-full absolute top-[72px]'/>
              <span className='h2'>Bitcoin</span>
              <div className='w-[550px] h-[105px] top-[164px] relative'>
                <span className='span'></span>
                <span className='border_one'></span>
                <span className='border_two'></span>
                <span className='border_three'></span>
                <div className='container'>
                  <span className='usd'>USD</span>
                  <img src={Chevron} alt="" className='absolute top-1.5 left-16 w-12'/>
                  <span className='change1'>Change 1h</span>
                  <span className='change2'>Change 24h</span>
                  <span className='last'>Last 7d</span>
                </div>
                <span className='usd_value'>3,500.40</span>
              </div>

            </div>
            <div className='main'>
              <img src={Ethereum} className='absolute top-[72px]'/>
              <span className='h2'>Ethereum</span>
              <div className='w-[550px] h-[105px] top-[164px] relative'>
                <span className='span'></span>
                <span className='border_one'></span>
                <span className='border_two'></span>
                <span className='border_three'></span>
                <div className='container'>
                  <span className='usd'>USD</span>
                  <img src={Chevron} alt="" className='absolute top-1.5 left-16 w-12'/>
                  <span className='change1'>Change 1h</span>
                  <span className='change2'>Change 24h</span>
                  <span className='last'>Last 7d</span>
                </div>
                <span className='usd_value'>3,500.40</span>
              </div>
            </div>
            <div className='main'>
              <img src={DogeCoin} className='absolute top-[72px]'/>
              <span className='h2'>Doge Coin</span>
              <div className='w-[550px] h-[105px] top-[164px] relative'>
                <span className='span'></span>
                <span className='border_one'></span>
                <span className='border_two'></span>
                <span className='border_three'></span>
                <div className='container'>
                  <span className='usd'>USD</span>
                  <img src={Chevron} alt="" className='absolute top-1.5 left-16 w-12'/>
                  <span className='change1'>Change 1h</span>
                  <span className='change2'>Change 24h</span>
                  <span className='last'>Last 7d</span>
                </div>
                <span className='usd_value'>3,500.40</span>
              </div>
            </div>
            <div className='main'>
              <img src={USCoin} className='absolute top-[72px]'/>
              <span className='h2'>USD Coin</span>
              <div className='w-[550px] h-[105px] top-[164px] relative'>
                <span className='span'></span>
                <span className='border_one'></span>
                <span className='border_two'></span>
                <span className='border_three'></span>
                <div className='container'>
                  <span className='usd'>USD</span>
                  <img src={Chevron} alt="" className='absolute top-1.5 left-16 w-12'/>
                  <span className='change1'>Change 1h</span>
                  <span className='change2'>Change 24h</span>
                  <span className='last'>Last 7d</span>
                </div>
                <span className='usd_value'>3,500.40</span>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-[55px]'>
            <button className='w-[196px] h-[50px] bg-[#0C3C4C] rounded-[10px] border border-[#6CE9A6] font-normal text-[25px] text-white leading-[38px]'>More Currency</button>
          </div>
          <div className='w-[1251px] h-[368px] mt-[87px] mb-[206px] flex justify-between'>
            <div>
              <div className='flex justify-center items-center gap-[9px]'>
                <span className='w-[100px] border-b border-2 border-[#93FCEC]'></span>
                <h4 className='font-normal text-[25px] leading-[30px] text-[#101828]'>Why Choose Us</h4>
                <span className='w-[100px] border-b border-2 border-[#93FCEC]'></span>
              </div>
              <h3 className='w-[401px] h-[60px] mt-[40px] font-normal text-[25px] leading-[30px]'>We’ve Built A Platform To Manage Assets</h3>
              <h2 className='w-[439px] h-[175px] font-normal text-[29.0593px] text-[#7C7D7D] mt-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </div>
            <img src={Hero1} alt="" className='w-[488.23px] h-[368px] mr-[61.77px]'/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default landingPage