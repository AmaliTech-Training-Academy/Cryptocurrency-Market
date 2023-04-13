import React from "react";
import bnb from "../assets/BNB.png";
import terra from "../assets/Terra logo.png";
import et from "../assets/Et.png";
import btc from "../assets/btc.png";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
const Watchlist = () => {
  const { data } = useSelector((store) => store.watchList);

  return (
    <>
      <div className="p-[40px] pt-[10px] mb-[42px]  shadow overflow-y-auto h-[560px] ">
        <h1 className="text-[25px] mb-[24px]">Watchlist</h1>
        {data.map((item,index) => {
          return (
            <Link key={index} to={'/watchlist'}>
            <div  className="flex justify-between items-center mb-[32px]">
              <div className="w-[30%]   flex justify-between items-center">
                <img src={item.iconUrl} alt="" className="w-9" />
                <h1 className="text-right">{item.name}</h1>
              </div>
              <h1>${item.price}</h1>
            </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Watchlist;
