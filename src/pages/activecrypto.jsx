import React, {useEffect, useState} from 'react'
import Navibar from '../component/Navibar'
import Assetmodal from '../component/Assetmodal'
import Filter from '../component/Filter'
import Cryptolist from '../component/Cryptolist'
import FilterPercent from '../component/FilterPercent'
import Name from "../assets/name.png"
import { useSelector } from 'react-redux'

function ActiveCrypto() {
  const [showModal, setShowModal] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [showFilterPercent, setShowFilterPercent] = useState(false)
  const [addCrypto, setAddCrypto] = useState(false)
  const [filterOrder, setFilterOrder] = useState('ASC')
  const [allData, setAllData] = useState([])

  
  const {data} = useSelector((store)=> store.data)
  const all = data?.coins
  console.log(all)
  

  const sortAlphabetically = () => {
    const modall = [...(all || [])]
    const sortAll = modall?.sort((a, b) => {
      if(a.name > b.name) return filterOrder === 'ASC' ? 1 : -1
      else if(a.name < b.name) return filterOrder === 'ASC' ? -1 : 1
      return 0
    });

    setFilterOrder(filterOrder === 'ASC' ? 'DESC': 'ASC')
    console.log(sortAll)
    setAllData(sortAll)    
    // .sort((a, b) => b.percentage - a.percentage)
  }
  
  useEffect(() => {
    setAllData(all);
  }, [all])
  
  const closeModal = () => setShowModal(false)
  const closeFilter = () => setShowFilter(false)
  const closeFilterPercent = () => setShowFilterPercent(false)

  return (
    <div>
      <Navibar />
      <div className='container mx-auto mt-[30px] mb-[36.56px]'>
        <div className='h-[76.2px] pl-[41.3px] pr-[46.55px] flex justify-between items-center'>
          <span className='font-normal text-[29.4999px] text-[#101828] leading-9 '>Market</span>
          <div className='w-[336px] h-[47.88] '>
            {/* <button 
            onClick={() => setShowFilter(true)}
            className='w-[134.52px] h-[47.88px] bg-white border border-[#D0D5DD] rounded-[9.43997px] text-[18.8799px] 
              shadow-[0px_1.18px_2.35999px_rgba(16, 24, 40, 0.05)] font-sans flex items-center justify-center gap-[35px]'>
              Filter
              <svg width="30" height="27" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.94 10L14 13.093L17.06 10L18 10.9569L14 15L10 10.9569L10.94 10Z" fill="black"/>
              </svg>
            </button> */}
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className='w-[118.77px] h-[44.54px] bg-[rgba(12,76,49,0.81)] rounded-[4.68106px] text-white font-sans font-normal'>
              Add Assets
          </button>
        </div>
        <div className='h-[45px] mt-[10px] pl-[24.8px] pr-[46.55px] pt-[11.8px] border-b-[0.235999px]'>
          <ul className='flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px]'>
          <li className='flex items-center gap-1'>
              Name
              <span onClick={() => setShowFilter(true)}>
                <img src={Name} alt=""  className='w-3 h-2.5 hover:cursor-pointer'/>
              </span>
            </li>
            <li>Symbol</li>
            <li>Price</li>
            <li className='flex items-center gap-1'>
              24H Change
              <span onClick={() => setShowFilterPercent(true)}>
                <img src={Name} alt=""  className='w-3 h-2.5 hover:cursor-pointer'/>
              </span>
            </li>
            <li>Total Supply</li>
            <li>Market Cap</li>
          </ul>
        </div> 
        <Cryptolist visible={addCrypto} allData={allData} setAllData={setAllData}/>
      </div>
        <Filter visible={showFilter} onClose={closeFilter} filter={sortAlphabetically}/>
        <FilterPercent visible={showFilterPercent} onClose={closeFilterPercent}/>
        <Assetmodal visible={showModal} onClose={closeModal}/>
    </div>
  )
}

export default ActiveCrypto