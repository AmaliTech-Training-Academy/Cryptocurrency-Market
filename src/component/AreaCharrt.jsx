import React, { useEffect, useState } from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from 'recharts';

const AreaChartComponent = ({data}) => {
//    const 

  return (
    <ResponsiveContainer width='100%' height={400}>
        <AreaChart data={data} margin={{top:5}}>
            <defs>
                <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'  >
                    <stop offset="0%" stopColor='#32D583' stopOpacity={0.5}/>
                    <stop offset="75%" stopColor='#32D583' stopOpacity={0.3}/>
                </linearGradient>
            </defs>
            <Area  dataKey='priceUsd' stroke="#32D583"  fill='url(#color)' />

            <Area   dataKey='name' />

        <YAxis dataKey='priceUsd' axisLine={false} tickLine={false} tickCount={10} />
        <XAxis dataKey='name'/>
        <Tooltip/>
        <CartesianGrid  opacity={0.1}/>
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent