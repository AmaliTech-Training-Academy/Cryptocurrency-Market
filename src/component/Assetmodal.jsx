import React from 'react'

function Assetmodal({ visible, onClose }) {
  if(!visible) return null
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center'>
      <div className='w-[433px] h-[366px] border-2 rounded-[15px] relative bg-white'>
        <div onClick={onClose} className='absolute top-[22.58px] right-[30.04px]'>
          <svg width="15" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9552 1.90769L11.7092 0.581055L6.76945 5.84054L1.82972 0.581055L0.58374 1.90769L5.52348 7.16717L0.58374 12.4267L1.82972 13.7533L6.76945 8.49381L11.7092 13.7533L12.9552 12.4267L8.01543 7.16717L12.9552 1.90769Z" fill="black"/>
          </svg>
        </div>
        <span className='font-normal text-[31.25px] text-[#101828] leading-[38px] absolute top-[52.69px] left-[60px]'>Add Assets</span>

        <div className='bg-green-500 relative'>
          <form action="">
            <div className='flex flex-col absolute top-[128.46px] left-[60.46px]'>
              <label className='font-normal text-[14.1892px] text-[#101828] leading-[17px] flex'>
                Asset Name 
                <span className='flex items-center ml-2'>
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.11255 4.37115L2.16448 2.94304L0.957077 3.70902L0.64549 3.16375L1.9178 2.50162L0.64549 1.8395L0.957077 1.29422L2.16448 2.06021L2.11255 0.632099H2.73572L2.68379 2.06021L3.89119 1.29422L4.20278 1.8395L2.93046 2.50162L4.20278 3.16375L3.89119 3.70902L2.68379 2.94304L2.73572 4.37115H2.11255Z" fill="#FF0000"/>
                  </svg>
                </span>
              </label>
              <input type="text" className='w-[102.81px] h-[30.8px] mt-[5.11px] rounded-[3.62343px] border-[0.226464px] border-[#C1C1C1] p-3' />
            </div>
            <div className='flex flex-col absolute top-[128.46px] right-[57.51px]'>
              <label className='font-normal text-[14.1892px] text-[#101828] leading-[17px] flex'>
                Symbol
                <span className='flex items-center ml-2'>
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.11255 4.37115L2.16448 2.94304L0.957077 3.70902L0.64549 3.16375L1.9178 2.50162L0.64549 1.8395L0.957077 1.29422L2.16448 2.06021L2.11255 0.632099H2.73572L2.68379 2.06021L3.89119 1.29422L4.20278 1.8395L2.93046 2.50162L4.20278 3.16375L3.89119 3.70902L2.68379 2.94304L2.73572 4.37115H2.11255Z" fill="#FF0000"/>
                  </svg>
                </span>
              </label>
              <input type="text" className='w-[102.81px] h-[30.8px] mt-[5.11px] rounded-[3.62343px] border-[0.226464px] border-[#C1C1C1] p-3' />
            </div>
            <div className='flex flex-col absolute top-[201.68px] left-[60.46px]'>
              <label className='font-normal text-[14.1892px] text-[#101828] leading-[17px] flex'>
                Quantity
                <span className='flex items-center ml-2'>
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.11255 4.37115L2.16448 2.94304L0.957077 3.70902L0.64549 3.16375L1.9178 2.50162L0.64549 1.8395L0.957077 1.29422L2.16448 2.06021L2.11255 0.632099H2.73572L2.68379 2.06021L3.89119 1.29422L4.20278 1.8395L2.93046 2.50162L4.20278 3.16375L3.89119 3.70902L2.68379 2.94304L2.73572 4.37115H2.11255Z" fill="#FF0000"/>
                  </svg>
                </span>
              </label>
              <input type="text" className='w-[102.81px] h-[30.8px] mt-[5.11px] rounded-[3.62343px] border-[0.226464px] border-[#C1C1C1] p-3'></input>
            </div>
            <div className='flex flex-col absolute top-[201.68px] right-[48px]'>
              <label className='font-normal text-[14.1892px] text-[#101828] leading-[17px] flex'>
                Purchase Price
                <span className='flex items-center ml-2'>
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.11255 4.37115L2.16448 2.94304L0.957077 3.70902L0.64549 3.16375L1.9178 2.50162L0.64549 1.8395L0.957077 1.29422L2.16448 2.06021L2.11255 0.632099H2.73572L2.68379 2.06021L3.89119 1.29422L4.20278 1.8395L2.93046 2.50162L4.20278 3.16375L3.89119 3.70902L2.68379 2.94304L2.73572 4.37115H2.11255Z" fill="#FF0000"/>
                  </svg>
                </span>
              </label>
              <input type="text" className='w-[102.81px] h-[30.8px] mt-[5.11px] rounded-[3.62343px] border-[0.226464px] border-[#C1C1C1] p-3' />
            </div>
          </form>
        </div>
        <button type='submit' className='w-[217.38px] h-[40.46px] absolute bottom-[26.54px] right-[107px] bg-[rgba(12,76,49,0.81)] rounded-[4.68px] text-white
        font-normal text-[18.6293px] leading-[23px]'>Add Asset</button>
      </div>
    </div>
  )
}

export default Assetmodal 