import { useDashboardType } from '@/context/dashboard'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FaChevronDown, FaHandHoldingHeart } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { IoLocationOutline, IoPeopleOutline } from 'react-icons/io5'
import { RiMentalHealthLine } from 'react-icons/ri'
// import { AddToCartBtn } from '../addToCart.tsx'

const OverviewDonationRightSection = () => {

  const {addProductAndDonationEvent} : any = useDashboardType()
  let percentage = 0;


  let chevronIcon = useRef();
  const [isTop, setIsTop] = useState(true)

  function rotate180Deg (){
    gsap.to(chevronIcon, {rotateZ : isTop ? 180 : 0})
    setIsTop(!isTop)
    
  }
  // const handleClickScroll = (whereUGo : string) => {
  //   const element = document.getElementById(whereUGo);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const handleClickScroll = (whereUGo : string) => {
    const element = document.getElementById('top');
    if (element && isTop)  element.scrollTo({ behavior: 'smooth', top : document.documentElement.scrollHeight });
    else {
      element!.scrollTo({ behavior: 'smooth', top : 0 });
    }}



  return (
    <div className='col-span-3 rounded-[32px] row-span-6  flex flex-col gap-5  overflow-y-scroll relative ' id='top'>
      {/* Top */}
        <div className='grid grid-cols-2 gap-10 bg-white p-[2rem] rounded-[32px]' id='mainContent'>
            {/* Right */}
            <div className='col-span-1  gap-10 content-center grid'>
              
              <div className='flex flex-col gap-3'>
                <p className='text-[24px] font-semibold'>{addProductAndDonationEvent.title}</p>
                <p className='text-[#39394f]'>{addProductAndDonationEvent.description}</p>
              </div>

              {/* carousel */}
              <div className='grid grid-cols-4 gap-4'>
                {addProductAndDonationEvent.carouselImg.map((img:any, imgIdx:number) => (
                            <div key={imgIdx} className={`rounded-[20px] overflow-hidden border-2 border-black` }>
                                <img src={img}  />
                            </div>            
                ))}
              </div>
            </div>

            {/* Left ===> Carousel Item */}
            <div style={{boxShadow: '1px 2px 9px #F4AAB9'}} className='col-span-1 rounded-[234px] p-1  overflow-hidden'>
                <img style={{boxShadow : '1px 2px 9px #000'}} className='rounded-[1312px]' src={addProductAndDonationEvent.carouselImg[0]} alt="" />
            </div>
        </div>

        {/* Bot */}
        <div className='grid grid-cols-2  rounded-[32px] gap-5'>
                <div className='flex flex-col justify-between bg-white p-5 rounded-[32px] gap-5  '>
                  <div className='col-span-1  flex flex-col gap-4  '> 
                    <div>
                      <p className='text-[16px] font-bold'>Detail</p>
                    </div>
                    {/* Members */}
                    <div className='flex gap-1 items-center ms-3'>
                      <span><RiMentalHealthLine size={19}/></span>
                      <p className='font-semibold text-[14px]'>0 people donated</p>
                    </div>
                    {/* Event By */}
                    <div className='flex gap-1 items-center ms-3'>
                        <span className='font-semibold text-[14px]'><BsPerson size={19} /></span>
                        <p className='text-[14px] font-semibold'>Dulguun</p>
                        
                    </div>

                    {/* Location */}
                    <div className='flex gap-1 items-center ms-3'>
                        <span><IoLocationOutline size={19}/></span>
                        <p className='text-[14px] font-semibold'>{addProductAndDonationEvent.location}</p>
                    </div>

                    {/* Duration */}
                    <div className='flex gap-2 items-center ms-3'>
                        <span><AiOutlineHeart size={19}/></span>
                        <div className='w-[60%] bg-[#e7e8f1] h-[10px] rounded-[20px] overflow-hidden'>
                        <div className={`w-[${percentage}%] h-full bg-[#6B6A62] rounded-[20px]`}></div>
                        </div>
                        <p className='text-[12px] ms-2'>{percentage}%</p>

                    </div>
                </div>

                {/* Add to cart btn */}

                {/* <AddToCartBtn bg='bg-[#000]' padX='p-[10px_30px]' outlineColor='outline-[#000]' addProductAndDonationEvent={addProductAndDonationEvent}/> */}
        
            </div>

            <div className='bg-white rounded-[32px] p-[2rem] '>
                <p className='text-[18px] font-semibold mb-3'>目的</p>
                <div className='flex flex-col gap-2'> 
                    {addProductAndDonationEvent.goals.map((goal:any, idx:number) => (
                                    <div key={idx} className='flex items-center ms-1 gap-1'>
                                      <span><HiOutlineSparkles size={16} color='#FFD95A'/></span>
                                      <p className='text-[1rem] font-medium'>{goal}</p>
                                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Scroll down */}
        <div onClick={()=>{
              rotate180Deg()
              isTop ? handleClickScroll('description') : handleClickScroll('mainContent')
            }} className='flex justify-center rounded-[312px] overflow-hidden bg-white mx-auto border-2 border-black  absolute bottom-[30px] left-[50%] -translate-x-[50%] p-[10px] cursor-pointer'>
            <span ref={el=>chevronIcon.current=el}><FaChevronDown/></span>
        </div>

        {/* Description 詳しいところ */}
        <div className='h-[100vh] bg-white mt-16 rounded-[32px]' id='description'>

{/* What company */}
<div className='border-b-2 border-black  p-[1rem_2rem_1rem_2rem] flex justify-between items-center'>
{/* Company/UserRequested Logo and Info */}
<div className='flex gap-1 items-center'>
{/* Logo */}
<div>
<img className='w-[60px] h-[60px]' src="/logo/GiftLabLogoLight.png" alt="" />
</div>
<div className='flex flex-col'>
<div>
    <p className='text-[1rem] text-[#39394f] font-bold'>{addProductAndDonationEvent.whoPosted}</p>
</div>

{/* Name */}
<div>
  <p className='text-[18px] text-default-black font-bold'>{addProductAndDonationEvent.title}</p>
</div>
</div>
</div>

{/* Posted Date */}
<div>
<p className='text-[14px] font-bold'>2023/01/05</p>
</div>
</div>

{/* Content */}
<div className=' p-[1.5rem_2rem_2rem_2rem]'>
<p className='text-[18px] leading-[3rem] tracking-[0.06rem]'>{addProductAndDonationEvent.description}</p>
</div>
        </div>
    </div>
  )
}

export default OverviewDonationRightSection