import React from 'react';


function Filter({ visible, onClose }) {
  if(!visible) return null
  
  return (
    <button onClick={onClose} className='bg-white w-[97px] h-[22px] rounded-[5.155px] shadow-[0px_0px_2.57px_1.28px_rgba(85,85,85,0.05)]
    absolute top-[230px] left-[190px] 2xl:left-[260px]'>
      hellooo
    </button>
  );
}

export default Filter;
