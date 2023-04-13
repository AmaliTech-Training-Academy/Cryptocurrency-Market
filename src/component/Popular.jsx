import React from "react";
import plus from "../assets/plus.png";
import down from "../assets/negative.png"
import { useSelector } from "react-redux";

const Popular = () => {
  const { data } = useSelector((store) => store.data);
  const all = data.data?.coins.slice(0, 10);

  return (
    <div className="p-[40px] pt-[32px] pb-[10px] shadow">
      <h1 className="text-[25px] mb-[41px]">Popular Assets</h1>
      {all &&
        all.map((item) => {
          return (
            <div key={item.uuid}  className="flex justify-between items-center mb-[32px]">
              <div className="font-normal text-[18.8799px] text-[#101828] flex gap-[15.34px]  justify-between items-center">
                <img
                  src={item.iconUrl}
                  alt=""
                  className="object-fill w-[27.14px] h-[27.14px]"
                />
                <h1 className="text-[21.5px]">{item.name}</h1>
              </div>
              <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
                <img src={`${item.change > 0 ?  plus : down}`} alt="" className="" />
                <h2 className={`text-[21.5px] ${item.change > 0 ?  'text-[#32D583]' : 'text-[red]'}`}>{item.change}%</h2>
              </div>
            </div>
          );
        })}

      {/* <div className="flex justify-between items-baseline mb-[32px]">
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
      </div> */}
    </div>
  );
};

export default Popular;
