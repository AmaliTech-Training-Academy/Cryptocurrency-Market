import React from "react";
import { CryptoGraphs, NaviBar, SelectedCrypto,CryptoInfo } from "../component";
const WatchList = () => {
  return (
    <div>
      <NaviBar />
      <div className="flex justify-between">
        <SelectedCrypto />
        <div className="w-[65%] mt-[38px] pr-5">
          <div >
            <CryptoGraphs />
            <CryptoInfo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
