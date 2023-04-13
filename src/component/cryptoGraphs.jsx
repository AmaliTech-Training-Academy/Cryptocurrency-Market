import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";



  
const cryptoGraphs = () => {
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
  },[]);
  console.log(data);
  return (
         <ResponsiveContainer  width="100%" height={400}>
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
          domain={[27000, 28800]}
          axisLine={false}
          tickLine={true}
          tickCount={8}
        />
        <XAxis dataKey="hr" />
        <Tooltip />
        <CartesianGrid opacity={0.1} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default cryptoGraphs