import React from 'react'

const profile = () => {
  return (
    <div className='bg-[#FCFCFD] ml-[43px]'>
   <div className="">
    <div className="bg-red-600 ">
  hello
    </div>


<div className='flex mt-[36px]'>
<div className='w-[268px] h-[213px] bg-[rgba(255,255,255,0.05)] shadow '>
    <div className=''>
      <div>Profile Settings</div>
      <div>Password</div>
      <div>Notification</div>
    </div>
</div>
<div className='ml-[71px] w-[969px] h-[748px] bg-[rgba(255,255,255,0.05)] shadow'>
  <div className='ml-[49px] mt-[32px]'>
    <div className='w-[525px] h-[127px] flex justify-between items-center'>
      <div className=' w-[127px] h-[127px] bg-zinc-900 rounded-full'></div>
      <div className='flex flex-row items-start  gap-10'>
      <div className='w-[141px] h-[39px] bg-[#0C3C4C] ml-[90px] py-[10px] px-[24px] rounded'>
          <button className='text-[#FFFFFF] text-base font-normal text-center '>Upload New</button>
        </div>
      </div>
        <div className='flex flex-row items-start  gap-10'>
        <div className='w-[149px] h-[39px] bg-[#E4E7EC] py-[10px] px-[24px] rounded'>
          <button className='text-[#101828] text-base font-normal text-center'>Delete avatar</button>
        </div>
        </div>
      </div>


      {/* fields */}
  <div className='mt-[54px]'>
    <div className='flex '>
     <div className='flex flex-col '>
     <label className=' text-[#000000] font-normal text-base ml-[10px]'>First Name</label>
     <input type="text" placeholder='First name' className='border w-[358px] h-[64px] mt-[18px] mb-[26px] mr-[37px] pl-[15px] rounded'/>
     </div>
      <div className='flex flex-col'>
      <label className='ml-[10px]'>Last Name</label>
      <input type="text" placeholder='Last name'  className='border w-[358px] h-[64px] mt-[18px] mb-[26px] pl-[15px] rounded'/>
      </div>
    </div>

  </div>

  {/* secondpart */}

  <div>
    <div className='flex '>
     <div className='flex flex-col'>
     <label className='ml-[10px]'>Email</label>
     <input type="text" placeholder='examples@gmail.com' className='border w-[358px] h-[64px] mt-[18px]  mr-[37px] pl-[15px] rounded'/>
     </div>
      <div className='flex flex-col'>
      <label className='ml-[10px]'>Mobile Number</label>
      <input type="text" placeholder='examples@gmail.com'  className='border w-[358px] h-[64px] mt-[18px] pl-[15px] rounded'/>
      </div>
    </div>

  </div>

  <div className='mt-[43px]'>
  <label className='pb-[26px]'>Gender</label>
    <div className='flex pt-[26px]'>
    <div className='flex flex-row ' >
      <div className='flex justify-between items-center pl-[16px] pr-[60px] w-[154px] h-[64px] border rounded mr-[19px]'>
        <input type="radio"  className='w-[22px] h-[22px]'/>
        <div className=''>Male</div>
      </div>
    </div>
    <div>
    <div className='flex flex-row ' >
      <div className='flex justify-between items-center pl-[16px] pr-[51px] w-[154px] h-[64px] border rounded'>
        <input type="radio"  className='w-[22px] h-[22px]'/>
        <div className=''>Female</div>
      </div>
    </div>
    </div>
    </div>
  </div>
  <div className='mt-[63px] '>
  <button className='bg-[#0C3C4C] w-[252px] h-[67px] rounded mb-[25px]'>Save Changes</button>
</div>
  </div>



</div>
</div>
   </div>


    </div>
  )
}

export default profile