import React from "react";
import bnb from "../assets/BNB.png";
import terra from "../assets/Terra logo.png";
import et from "../assets/Et.png";
import btc from "../assets/btc.png";
import { useSelector } from 'react-redux'
const Watchlist = () => {
  const {data} = useSelector((store)=>store.watchList)

  return (
    <div className="p-[40px] pt-[10px] mb-[42px] shadow">
      <h1 className="text-[25px] mb-[24px]">Watchlist</h1>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[70px] flex justify-between">
          <img src={bnb} alt="" />
          <h1>BNB</h1>
        </div>
        <h1>$41,650,00</h1>
      </div>
    
    </div>
  );
};

export default Watchlist;
