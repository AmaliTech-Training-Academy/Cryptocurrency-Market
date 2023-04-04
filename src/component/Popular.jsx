import React from 'react'
import bnb from "../assets/BNB.png";
import pluss from "../assets/pluss.png";
import terra from "../assets/Terra logo.png";
import et from "../assets/Et.png";
import btc from "../assets/btc.png";
import Doge from "../assets/Doge coin.png";
import Cardano from "../assets/Cardano.png";

const Popular = () => {
  return (
    <div className='p-[40px] pt-[32px] pb-[10px] shadow'>
        <h1 className="text-[25px] mb-[41px]">Popular Assets</h1>
        <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[80px] flex justify-between">
          <img src={bnb} alt="" className='object-fill' />
          <h1 className='text-[21.5px]'>BNB</h1>
        </div>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={pluss} alt="" className=''/>
          <h2 className='text-[21.5px]'>+45.74%</h2>
        </div>
      </div>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[110px] flex justify-between">
          <img src={btc} alt="" />
          <h1 className='text-[21.5px]'>Bitcoin</h1>
        </div>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={pluss} alt="" className=''/>
          <h2 className='text-[21.5px]'>+45.74%</h2>
        </div>
      </div>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[140px] flex justify-between items-center">
        <div className="h-[22px] w-[22px] shadow rounded-full  flex items-center justify-center">
          <img src={et} alt="" />
          </div>
          <h1 className='text-[21.5px]'>Ethereum</h1>
        </div>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={pluss} alt="" className=''/>
          <h2 className='text-[21.5px]'>+45.74%</h2>
        </div>
      </div>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[95px] flex justify-between">
          <img src={terra} alt="" />
          <h1 className='text-[21.5px]'>Terra</h1>
        </div>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={pluss} alt="" className=''/>
          <h2 className='text-[21.5px]'>+45.74%</h2>
        </div>
      </div>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[129px] flex justify-between">
          <img src={Cardano} alt="" />
          <h1 className='text-[21.5px]'>Cardano</h1>
        </div>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={pluss} alt="" className=''/>
          <h2 className='text-[21.5px]'>+45.74%</h2>
        </div>
      </div>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[150px] flex justify-between">
          <img src={Doge} alt="" />
          <h1 className='text-[21.5px]'>Doge coin</h1>
        </div>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={pluss} alt="" className=''/>
          <h2 className='text-[21.5px]'>+45.74%</h2>
        </div>
      </div>
    </div>
  )
}

export default Popular