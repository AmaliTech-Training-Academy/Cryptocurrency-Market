import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


<<<<<<< HEAD
function Filter({ visible, onClose }) {
=======
function Filter({ visible, onclose }) {
>>>>>>> 8151e00 (feature: created component to display active crypto)
  const [checkboxStates, setCheckboxStates] = useState([false, false, false, false, false]);
  if(!visible) return null

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <div className="w-[301px] h-[329px] bg-white pt-[36px] shadow-[0px_0px_4px_2px_rgba(85,85,85,0.05)] absolute top-44 right-44 2xl:right-[280px]">
      <div className="">
        <label
          htmlFor="check-box-1"
          className="font-normal text-[18.8799px] leading-7 ml-7 relative"
        >
          <input
            type="checkbox"
            id="check-box-1"
            checked={checkboxStates[0]}
            onChange={() => handleCheckboxChange(0)}
<<<<<<< HEAD
            onClick={onClose}
=======
>>>>>>> 8151e00 (feature: created component to display active crypto)
            className="appearance-none w-[22px] h-[22px] border-[1px] border-[#32D583] relative"
          />
          <FontAwesomeIcon
            icon={faCheck}
<<<<<<< HEAD
=======
            onClick={onclose}
>>>>>>> 8151e00 (feature: created component to display active crypto)
            className={`h-[8.43px] w-[11px] absolute left-[5px] top-[3px] text-8xl transition ${
              checkboxStates[0] ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <span className='ml-[28px]'>Name</span>
        </label>
      </div>
      <div className='mt-[30px]'>
        <label
          htmlFor="check-box-2"
          className="font-normal text-[18.8799px] leading-7 ml-7 relative"
        >
          <input
            type="checkbox"
            id="check-box-2"
            checked={checkboxStates[1]}
            onChange={() => handleCheckboxChange(1)}
<<<<<<< HEAD
            onClick={onClose}
=======
>>>>>>> 8151e00 (feature: created component to display active crypto)
            className="appearance-none w-[22px] h-[22px] border-[1px] border-[#32D583] relative"
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={`h-[8.43px] w-[11px] absolute left-[5px] top-[3px] text-8xl transition ${
              checkboxStates[1] ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <span className='ml-[28px]'>Symbol</span>
        </label>
      </div>
      <div className='mt-[30px]'>
        <label
          htmlFor="check-box-3"
          className="font-normal text-[18.8799px] leading-7 ml-7 relative"
        >
          <input
            type="checkbox"
            id="check-box-3"
            checked={checkboxStates[2]}
            onChange={() => handleCheckboxChange(2)}
<<<<<<< HEAD
            onClick={onClose}
=======
>>>>>>> 8151e00 (feature: created component to display active crypto)
            className="appearance-none w-[22px] h-[22px] border-[1px] border-[#32D583] relative"
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={`h-[8.43px] w-[11px] absolute left-[5px] top-[3px] text-8xl transition ${
              checkboxStates[2] ? 'opacity-100' : 'opacity-0'
            }`}
          /> 
          <span className='ml-[28px]'>24H Change</span>
        </label>
      </div>
      <div className='mt-[30px]'>
        <label
          htmlFor="check-box-4"
          className="font-normal text-[18.8799px] leading-7 ml-7 relative"
        >
          <input
            type="checkbox"
            id="check-box-4"
            checked={checkboxStates[3]}
            onChange={() => handleCheckboxChange(3)}
<<<<<<< HEAD
            onClick={onClose}
=======
>>>>>>> 8151e00 (feature: created component to display active crypto)
            className="appearance-none w-[22px] h-[22px] border-[1px] border-[#32D583] relative"
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={`h-[8.43px] w-[11px] absolute left-[5px] top-[3px] text-8xl transition ${
              checkboxStates[3] ? 'opacity-100' : 'opacity-0'
            }`}
          />  
          <span className='ml-[28px]'>Total Supply</span>
        </label>
      </div>
      <div className='mt-[30px]'>
        <label
          htmlFor="check-box-5"
          className="font-normal text-[18.8799px] leading-7 ml-7 relative"
        >
          <input
            type="checkbox"
            id="check-box-5"
            checked={checkboxStates[4]}
            onChange={() => handleCheckboxChange(4)}
<<<<<<< HEAD
            onClick={onClose}
=======
>>>>>>> 8151e00 (feature: created component to display active crypto)
            className="appearance-none w-[22px] h-[22px] border-[1px] border-[#32D583] relative"
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={`h-[8.43px] w-[11px] absolute left-[5px] top-[3px] text-8xl transition ${
              checkboxStates[4] ? 'opacity-100' : 'opacity-0'
            }`}
          />  
          <span className='ml-[28px]'>Market Cap</span>
        </label>
      </div>
    </div>
  );
}

export default Filter;
