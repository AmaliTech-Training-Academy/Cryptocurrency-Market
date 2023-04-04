import React, { useState } from 'react'
import BNB from "../assets/BNB.png"
import Up from "../assets/up.png"
import Cryptomodal from './Cryptomodal'


function Cryptolist({visible}) {
const [addCrypto, setAddCrypto] = useState(false)

const closeCrypto = () => setAddCrypto(false)

  return (
    <div>
      <div onClick={() => setAddCrypto(true)} className=' pl-[24.8px] pr-[46.55px] mt-5 relative'>
        <div>
          <span className='font-normal text-[18.8799px] text-[#101828] flex gap-[15.34px]'>
            <img src={BNB} alt="" className='w-[27.14px] h-[27.14px]'/>
            BNB
          </span>
        </div>
        <div>
          <span className='absolute left-[240px] top-0 2xl:left-[300px] font-normal text-[18.8799px] text-[#101828]'>
            BNB
          </span>
        </div>
        <div>
          <span className='absolute left-[405px] top-0 2xl:left-[510px] font-normal text-[18.8799px] text-[#101828]'>
            $41,650,00
          </span>
        </div>
        <div>
            <img src={Up} alt="" className='w-[16.52px] h-[16.52px] absolute left-[610px] top-1 2xl:left-[760px]'/>
          <span className=' absolute left-[635px] top-0 2xl:left-[790px] font-normal text-[18.8799px] text-[#32D583] flex gap-[12.98px]'>
            $41,650,00
          </span>
        </div>
        <div>
          <span className='absolute right-[300px] top-0 2xl:right-[350px] font-normal text-[18.8799px] text-[#101828]'>
            $715,650M
          </span>
        </div>
        <div>
          <span className='absolute right-[50px] top-0 2xl:right-[50px] font-normal text-[18.8799px] text-[#101828]'>
            $715,650M
          </span>
        </div>
      </div>
      <Cryptomodal visible={addCrypto} onClose={closeCrypto}/>
    </div>
  )
}

export default Cryptolist