import React from "react";
import {NaviBar, SelectedCrypto } from "../component";
import { useLocation } from 'react-router-dom'

const WatchList = () => {
  const search = new URLSearchParams(useLocation().search)
  const id = search.get('id')
  return (
    <div>
      <NaviBar />
      <div className="">
        <SelectedCrypto id={id} />
       
      </div>
    </div>
  );
};

export default WatchList;
