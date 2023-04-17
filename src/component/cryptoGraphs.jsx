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

const cryptoGraphs = ({ item }) => {
  const { data: all } = useSelector((store) => store.data);
  const [data, setData] = useState([
    { hr: 0, price: 30011.57671544483 },
    { hr: 2, price: 30037.025489540047 },
    { hr: 4, price: 30021.06624566177 },
    { hr: 6, price: 30077.045943389778 },
    { hr: 8, price: 30087.50856024927 },
    { hr: 10, price: 30203.622670676137 },
    { hr: 12, price: 30227.729380240813 },
    { hr: 14, price: 30163.03998563174 },
    { hr: 16, price: 29999.935625202892 },
    { hr: 18, price: 30021.246109989163 },

    { hr: 20, price: 30041.065903291463 },

    { hr: 22, price: 30023.08321747515 },
  ]);
  const [selected, setSelected] = useState({
    uuid: "Qwsogvtv82FCd",
    iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    name: "Bitcoin",
    price: "30140.82",
  });
  const id = selected?.uuid;

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `https://api.coinranking.com/v2/coins?uuids[]=${id}`
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
    <div className="mb-[41px] shadow p-4">
      
      <ResponsiveContainer width="100%" height={400}>
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
              <div className="w-[190px] flex justify-between items-center">
                <h1 className="text-[#7C7D7D]">Mkt Cap</h1>
                <div className="flex justify-between items-center">
                  <p>{item.marketCap}</p>
                  <div className="h-10 bg-[#7C7D7D] text-[#7C7D7D] w-[0.5px] ml-2"></div>
                </div>
              </div>
              <div className="w-[140px] flex justify-between items-center">
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
              <div className="w-[140px] flex justify-between items-center">
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