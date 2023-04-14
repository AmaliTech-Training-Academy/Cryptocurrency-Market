import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useSelector } from "react-redux";

const cryptoGraphs = ({ item,uuid }) => {
  const { data: all } = useSelector((store) => store.data);
  const [data, setData] = useState([
    
  ]);
  const [selected, setSelected] = useState({
   
  });
  const id = selected?.uuid;

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `https://api.coinranking.com/v2/coins?uuids[]=${id || uuid}`
      );
      const data = response.data.data.coins[0]?.sparkline.splice(0, 12);
      setData(
        data.map((items, index) => {
          return { hr: index * 2, price: parseFloat(items) };
        })
      );
    };
    fetchdata();
  }, [id]);

  useEffect(() => {
    setSelected(item);
  }, [item]);
  const info = all.data?.coins;
  const select = info.filter((item) => item.uuid === id);
  return (
    <div className=" shadow p-4 mb-10">
      <div className="flex flex-col  ">
        {select &&
          select.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex w-[210px] justify-between items-center">
                  <h1 className="text-[25px] ">{item.symbol}</h1>
                  <h2 className="text-[21px]">{item.name}</h2>
                </div>
                <div className="flex w-[210px] justify-between items-center">
                  <p>${Number(item.price).toFixed(2)}</p>
                  <p
                    className={`${
                      item.change > 0 ? "text-[#32D583]" : "text-[red]"
                    }`}
                  >
                    {item.change}%
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="border-b mb-10"></div>
      <ResponsiveContainer width="100%" height={370}>
        <AreaChart data={data} margin={{ top: 5 }}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#32D583" stopOpacity={0.5} />
              <stop offset="75%" stopColor="#32D583" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <Area dataKey="price" stroke="#32D583" fill="url(#color)" />

          <YAxis
            dataKey=""
            domain={[29000, 30800]}
            axisLine={false}
            tickLine={true}
            tickCount={8}
          />
          <XAxis dataKey="hr" />
          <Tooltip />
          <CartesianGrid opacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>

      {select &&
        select.map((item, index) => {
          return (
            <div key={index} className=" flex justify-between">
              <div className="w-[210px] flex justify-between items-center">
                <h1 className="text-[#7C7D7D]">Mkt Cap</h1>
                <div className="flex justify-between items-center">
                  <p>{item.marketCap}</p>
                  <div className="h-10 bg-[#7C7D7D] text-[#7C7D7D] w-[0.5px] ml-2"></div>
                </div>
              </div>
              <div className="w-[180px] flex justify-between items-center">
                <h1 className="text-[#7C7D7D]">Vol</h1>
                <div className="flex justify-between items-center">
                  <p>{item["24hVolume"]}</p>
                  <div className="h-10 bg-[#7C7D7D] text-[#7C7D7D] w-[0.5px] ml-2"></div>
                </div>
              </div>
              <div className="w-[140px] flex justify-between items-center">
                <h1 className="text-[#7C7D7D]">Change</h1>
                <div className="flex justify-between items-center">
                  <p>{item.change}</p>
                  <div className="h-10 bg-[#7C7D7D] text-[#7C7D7D] w-[0.5px] ml-2"></div>
                </div>
              </div>
              <div className="w-[150px] flex justify-between items-center">
                <h1 className="text-[#7C7D7D]">Low volume</h1>
                <div className="flex justify-between items-center">
                  <p>{item.lowVolume ? "True" : "False"}</p>
                  <div className="h-10 bg-[#7C7D7D] text-[#7C7D7D] w-[0.5px] ml-2"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default cryptoGraphs;
