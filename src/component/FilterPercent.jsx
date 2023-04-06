import React from 'react';


function FilterPercent({ visible, onClose }) {
  if(!visible) return null
  
  return (
    <button onClick={onClose} className='bg-white w-[97px] h-[58px] rounded-[5.155px] shadow-[0px_0px_2.57px_1.28px_rgba(85,85,85,0.05)]
    absolute top-[230px] right-[540px] 2xl:right-[750px]'>
      hey
    </button>
  );
}

export default FilterPercent;
