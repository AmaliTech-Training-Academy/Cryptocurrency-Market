import React from 'react'
import { NaviBar, Popular, ViewStat, Watchlist,ViewStatInfo } from "../component";

const viewStatistics = () => {
  return (
    <>
    <NaviBar/>
    <div className="flex justify-between p-[45px]">
      <div className="w-[70%]  flex flex-col" >
<ViewStat/>
    <ViewStatInfo/>
      </div>
      <div className="w-[26%]  flex flex-col">
        <Watchlist />
        <Popular />
      </div>
    </div>
    </>
  )
}

export default viewStatistics