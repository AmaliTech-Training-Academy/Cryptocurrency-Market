import React,{useEffect} from "react";
import { Popular, Statistics, Trending, Watchlist } from "../component";
import { useDispatch,useSelector } from "react-redux";
import { getData } from "../features/crypto/cryptoSlice";


const dashboard = () => {
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(getData())
   },[])
  return (
    <div className="flex justify-between p-[45px]">
      <div className="w-[70%]  flex flex-col" >
        <Statistics />
        <Trending />
      </div>
      <div className="w-[26%]  flex flex-col">
        <Watchlist />
        <Popular />
      </div>
    </div>
  );
};

export default dashboard;
