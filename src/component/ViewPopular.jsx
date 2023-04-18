import React from 'react'
import plus from "../assets/plus.png";
import down from "../assets/negative.png";
import { useSelector } from "react-redux";

const ViewPopular = () => {
    const { data } = useSelector((store) => store.data);
    const all = data.data?.coins.slice(0, 10);
  
    return (
      <div className="p-[40px] pt-[32px] h-[257px]  pb-[10px] shadow overflow-y-auto scrollbar">
        <h1 className="text-[25px] mb-[41px]">Popular Assets</h1>
        {all &&
          all.map((item) => {
            return (
              <div
                key={item.uuid}
                className="flex justify-between items-center mb-[32px] "
              >
                <div className="font-normal text-[18.8799px] text-[#101828] flex gap-[15.34px]  justify-between items-center">
                  <img
                    src={item.iconUrl}
                    alt=""
                    className="object-fill w-[27.14px] h-[27.14px]"
                  />
                  <h1 className="text-[21.5px]">{item.name}</h1>
                </div>
                <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
                  <img
                    src={`${item.change > 0 ? plus : down}`}
                    alt=""
                    className=""
                  />
                  <h2
                    className={`text-[21.5px] ${
                      item.change > 0 ? "text-[#32D583]" : "text-[red]"
                    }`}
                  >
                    {item.change}%
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
    );
}

export default ViewPopular