import React from "react";
import { Link } from "react-router-dom";
import bnb from "../assets/BNB.png";
import plus from "../assets/plus.png";
const Trending = () => {
  return (
    <div className="p-4 shadow">
      <div className="flex justify-between items-baseline mb-[22px]">
        <h1 className="text-[25px] mb-[10px]">Trending Market</h1>
        <Link className="text-[blue]">View more market</Link>
      </div>
      <div className="flex justify-between mb-4">
        <h2>Name</h2>
        <h2>Symbol</h2>
        <h2>Price</h2>
        <h2>24H Change</h2>
        <h2>Market Cap</h2>
      </div>
      <div className="border-b mb-4"></div>
      <div className="flex justify-between items-baseline mb-[30px]">
        <div className="w-[75px] flex justify-between items-center ">
          <img src={bnb} alt="" />
          <h2>BNB</h2>
        </div>
        <h2 className="">BNB</h2>
        <h2>$41,650,00</h2>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={plus} alt="" />
          <h2>+45.74%</h2>
        </div>
        <h2>$715,650M</h2>
      </div>
      <div className="flex justify-between items-baseline mb-[30px]">
        <div className="w-[75px] flex justify-between items-center ">
          <img src={bnb} alt="" />
          <h2>BNB</h2>
        </div>
        <h2 className="">BNB</h2>
        <h2>$41,650,00</h2>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={plus} alt="" />
          <h2>+45.74%</h2>
        </div>
        <h2>$715,650M</h2>
      </div>
      <div className="flex justify-between items-baseline mb-[30px]">
        <div className="w-[75px] flex justify-between items-center ">
          <img src={bnb} alt="" />
          <h2>BNB</h2>
        </div>
        <h2 className="">BNB</h2>
        <h2>$41,650,00</h2>
        <div className="w-[100px] mr-8 flex justify-between items-center text-[#32D583]">
          <img src={plus} alt="" />
          <h2>+45.74%</h2>
        </div>
        <h2>$715,650M</h2>
      </div>
    </div>
  );
};

export default Trending;
