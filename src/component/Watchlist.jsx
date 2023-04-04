import React from "react";
import bnb from "../assets/BNB.png";
import terra from "../assets/Terra logo.png";
import et from "../assets/Et.png";
import btc from "../assets/btc.png";

const Watchlist = () => {
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
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[90px] flex justify-between">
          <img src={btc} alt="" />
          <h1>Bitcoin</h1>
        </div>
        <h1>$41,650,00</h1>
      </div>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[110px] flex justify-between">
          <div className="h-[22px] w-[22px] rounded-full  flex items-center justify-center">
          <img src={et} alt="" />
          </div>
          <h1>Ethereum</h1>
        </div>
        <h1>$41,650,00</h1>
      </div>
      <div className="flex justify-between items-baseline mb-[32px]">
        <div className="w-[80px] flex justify-between">
          <img src={terra} alt="" />
          <h1>Terra</h1>
        </div>
        <h1>$41,650,00</h1>
      </div>
    </div>
  );
};

export default Watchlist;
