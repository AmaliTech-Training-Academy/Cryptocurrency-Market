import React, { useState } from 'react'
import BNB from "../assets/BNB.png"
import Up from "../assets/up.png"
import Cryptomodal from './Cryptomodal'
import { useSelector } from 'react-redux'
import AddWatchlist from '../component/AddWatchlist'


function Cryptolist({ allData, setAllData }) {
  const [showWatchlist, setShowWatchlist] = useState(false)
  const [selectedItem, setSelecteditem] = useState({})
  const [addCrypto, setAddCrypto] = useState(false)

  const handleSetWatchList = (item) => {
    console.log("yes")
    const {uuid,price,name} = item
    setSelecteditem({
      uuid,
      name,
      price: Number(item.price).toFixed(2)
    })
    setShowWatchlist(true)
  }

  const closeWatchlist = () => setShowWatchlist(false)
  const closeCrypto = () => setAddCrypto(false)

  // console.log(all);

  return (
    <div>
      {allData && allData.map((item, index)=>{
        return(
          <>
            <div key={index} className='pl-[24.8px] flex items-center mt-5 relative h-10 cursor-pointer'>
              <div onClick={() => setAddCrypto(true)}>
                <span className='font-normal text-[18.8799px] text-[#101828] flex gap-[15.34px]'>
                  <img src={item.iconUrl} alt="" className='w-[27.14px] h-[27.14px]'/>
                  {item.name}
                </span>
              </div>
              <div>
                <span className='absolute left-[240px] top-2 2xl:left-[290px] font-normal text-[18.8799px] text-[#101828]'>
                  {item.symbol}
                </span>
              </div>
              <div>
                <span className='absolute left-[405px] top-2 2xl:left-[510px] font-normal text-[18.8799px] text-[#101828]'>
                  ${Number(item.price).toFixed(2)}
                </span>
              </div>
              <div>
                  <img src={Up} alt="" className='absolute left-[610px] top-3 2xl:left-[770px]'/>
                <span className=' absolute left-[635px] top-2 2xl:left-[800px] font-normal text-[18.8799px] text-[#32D583] flex gap-[12.98px]'>
                  {item.change}
                </span>
              </div>
              <div>
                <span className='absolute right-[300px] top-2 2xl:right-[350px] font-normal text-[18.8799px] text-[#101828]'>
                  $715,650M
                </span>
              </div>
              <div>
                <span className='absolute right-[25px] top-2 2xl:right-[25px] font-normal text-[18.8799px] text-[#101828] flex'>
                  ${item.marketCap.slice(0,7)}M <span onClick={() => handleSetWatchList(item)} className='pl-2'>+</span>
                </span>
              {((showWatchlist) && (selectedItem.uuid === item.uuid)) && <AddWatchlist visible={showWatchlist} onClose={closeWatchlist} item={selectedItem}/>}
              </div>
            </div>
          </>
        )
      }) }
      <Cryptomodal visible={addCrypto} onClose={closeCrypto}/>
    </div>
  )
}

export default Cryptolist