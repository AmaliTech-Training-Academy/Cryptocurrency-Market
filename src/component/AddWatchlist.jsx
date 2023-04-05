import React from 'react';


function AddWatchlist({ visible, onClose }) {
  if(!visible) return null
  
  return (
    <button onClick={onClose} className='bg-white w-[118px] h-[28.58px] rounded-[7.375px] shadow-[0px_0px_3.6785px_1.84375px_rgba(85,85,85,0.05)]
    absolute top-[190px] right-[40px] text-[12px] leading-[15px] 2xl:right-[750px]'>
      New watchlist
    </button>
  );
}

export default AddWatchlist;