import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router'

const Watchlist = () => {
  const { data } = useSelector((store) => store.watchList);
const navigate = useNavigate()

  const handleSubmit = (id) =>{
     navigate(`/watchlist?id=${id}`)
  }
    
  return (
    <>
      <div className="p-[40px] pt-[10px] mb-[42px]  shadow overflow-y-auto h-[560px] cursor-pointer">
        <h1 className="text-[25px] mb-[24px]">Watchlist</h1>
        {data.map((item,index) => {
          
          return (
            <div  className="flex justify-between items-center mb-[32px]" onClick={()=>{handleSubmit(item.uuid)}}>
              <div className="w-[30%]   flex justify-between items-center">
                <img src={item.iconUrl} alt="" className="w-9" />
                <h1 className="text-right">{item.name}</h1>
              </div>
              <h1>${item.price}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Watchlist;
