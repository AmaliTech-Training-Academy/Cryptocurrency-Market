import axios from "axios";
import React, { useEffect, useState } from "react";
import AreaChartComponent from "./AreaCharrt";

const Statistics = () => {

 

    const [data,setData] = useState()
    const [rate,setRate] = useState()
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://api.coinranking.com/v2/coins?limit=10"
        );
        const data =  response.data.data.coins[0].sparkline.slice(0,12)
        setRate(response.data.data.coins[0].change)
        setData(data.map((items, index)=>{
            return {hr: index * 2  , price: parseFloat(items)}
          }))
    };
    fetchdata()
  },[data]);
  

  return ( 
    <div className="pl-[36px] pr-[51px] pt-[13px] pb-[10px] mb-[69px] shadow">
      <h1 className="text-[25px] mb-[10px]">Statistics</h1>
      <div className="flex justify-between mb-4">
        <div className="flex w-[170px] justify-between items-baseline">
          <h2 className="text-[21px]">Bitcoin</h2>
          <p>BTC/USD</p>
        </div>
        <div className="flex  w-[170px] justify-between items-center">
          <h2 className="text-[21px]">US$155.00</h2>
          <p className="text-[red]">{rate}</p>
        </div>
      </div>
      <div className="border-b mb-10"></div>
      <AreaChartComponent data={data} />
    </div>
  );
};

export default Statistics;

