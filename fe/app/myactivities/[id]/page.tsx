'use client'
import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

// ICON IMPORTS
import {FiClock, FiSearch} from 'react-icons/fi'
import {FaRegBell} from 'react-icons/fa'
import {CgMoreVerticalAlt} from 'react-icons/cg'
import {HiOutlineSparkles, HiOutlineCalendar, HiOutlinePhone} from 'react-icons/hi'
import { BsCameraVideo, BsEmojiSunglasses, BsMic, BsSend } from 'react-icons/bs'
import { MdOutlineCancel, MdOutlinePersonOutline } from 'react-icons/md'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { GrAdd } from 'react-icons/gr'

// LOCAL IMPORT
import Navbar from '@/app/component/layout/Navbar'

const MyActivity = () => {

  const [isTypeBtnClicked, setIsTypeBtnClicked] = useState(false)

  return (
    <Navbar>
            <div className='col-span-3 bg-white rounded-[32px] row-span-1'>
                <div className='h-full flex items-center gap-10 px-6 justify-between'>
                    <div className='flex gap-4 items-center'>
                        {/* PROFILE IMG */}
                        <div className='rounded-[29px] overflow-hidden w-[58px] h-[58px]'>
                            {/* <Image className= '' src='https://i.pinimg.com/564x/5d/5d/c5/5d5dc5e80aa7293f95cc8ac4a0604a25.jpg' alt='Chiaki' width={50} height={50} objectFit='cover' /> */}
                            <img className='w-full' src="https://i.pinimg.com/564x/66/bc/99/66bc99a825c216faaaa8e17d1c5602d5.jpg" alt="Chiaki" />
                        </div>
                        <div className='border-e-2 pe-4'>
                            <p className='font-semibold'>Chiaki Koga</p>
                            <p className='text-[12px] text-[#b6b8cb]'>Oxford student</p>
                        </div>
                        <div>
                            <div className='bg-[#e7e8f0] p-[11px_1rem] rounded-[32px] flex gap-2 items-center'>
                                <span className='text-[22px]'><HiOutlineCalendar/></span>
                                <p>12 Jan</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <div className='flex items-center bg-[#e7e8f0] rounded-[32px] p-[11px_1rem] gap-3'>
                                <span className='cursor-pointer'><FiSearch/></span>
                                <input className='outline-none bg-transparent' placeholder='Search' type="text" />
                            </div>
                            <div className=' flex justify-center items-center cursor-pointer text-[20px] bg-[#e7e8f0] w-[2.6rem] h-[2.6rem] rounded-[1.3rem]'>
                                <FiSearch/>
                            </div>
                            <div className=' flex justify-center items-center cursor-pointer text-[20px] bg-[#e7e8f0] w-[2.6rem] h-[2.6rem] rounded-[1.3rem]'>
                                <FaRegBell/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-span-1 bg-white rounded-[32px] p-[0.6rem] row-span-6 '>
                {/* Chat Profile */}
                <div className='h-[40%] bg-[#e7e8f0] rounded-[32px] py-4'>
                    <div className='flex justify-end px-4'>
                        <MdOutlineCancel/>
                    </div>
                    <div className='flex flex-col gap-8 items-center h-full'>
                        <div className='flex flex-col justify-center items-center gap-[2px]' >
                            <div className='w-[80px] h-[80px] rounded-[40px] border-[2.5px] border-white relative'>
                                <img className='w-[76px] h-[76px] object-cover rounded-[38px] ' src="https://i.pinimg.com/564x/66/bc/99/66bc99a825c216faaaa8e17d1c5602d5.jpg" alt="Chiaki" />
                                <div className='absolute bottom-0 right-[2px] bg-[#FF6969] w-[18px] h-[18px] z-30 rounded-[9px] border-2 border-white'></div>
                            </div>
                            <p className='font-semibold'>Chiaki Koga</p>
                            <p className='text-[14px] font-light'>@yoona</p>
                        </div>
                        <div className='flex gap-5'>
                            <div className='text-[20px] bg-white p-2 rounded-[200px]'>
                                <HiOutlinePhone/>
                            </div>
                            <div className='text-[20px] bg-white p-2 rounded-[200px]'>
                                <BsCameraVideo/>
                            </div>
                            <div className='text-[20px] bg-white p-2 rounded-[200px]'>
                                <CgMoreVerticalAlt/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Is Today? */}
                <div className='flex justify-center gap-[100px] my-8  px-2 relative'>
                    <div className='col-span-4 border-t-2 w-[100%] '>  </div>
                    <div className='absolute -top-3 left-[50%] -translate-x-[50%] font-medium'>Today</div>
                    <div className='col-span-4 border-t-2 w-[100%]'></div>
                </div>

                <div className='flex flex-col justify-between'>
                    {/* CHATBOX */}
                    <div onClick={()=>setIsTypeBtnClicked(false)} className='flex flex-col gap-3 px-[14px] overflow-y-scroll'>
                        {/* From Chiaki */}
                        <div className='flex justify-start w-[70%]'>
                            <div className=' bg-[#e7e8f0] p-3 rounded-[20px_15px_15px_10px]'>i&apos;ll just hold u beautiful face and kiss u, like there&apos;s no tomorrow&apos;</div> 
                            {/* width - 70% ugmuur bgan asuuh */}
                        </div>
                        {/* From Me */}
                        <div className='flex justify-end'>
                            <div className=' bg-[#C4DDFF] p-3 rounded-[15px_20px_10px_15px] text-end'>(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄❤️</div>
                        </div>

                        <div className='flex justify-start'>
                            <div className=' bg-[#e7e8f0] p-3 rounded-[20px_15px_15px_10px]'>Whahahahha</div> 
                            {/* width - 70% ugmuur bgan asuuh */}
                        </div>
                    </div>

                    {/* TypeBox */}
                    <div className='flex gap-4 px-[20px] mt-5 justify-between bg-[#e7e8f0] py-3 rounded-[10px] items-center overflow-hidden'>
                        <div className='w-[85%]'>
                            <input onClick={() => setIsTypeBtnClicked(true)} className='outline-none bg-transparent w-full' placeholder='Write a message' type="text" />
                        </div>
                        <motion.div className='flex gap-4 items-center'>
                            <AnimatePresence>
                                <motion.span className='cursor-pointer' layout><BsEmojiSunglasses/></motion.span>
                                <motion.span className='cursor-pointer' layout><BsMic/></motion.span>
                                {isTypeBtnClicked && <motion.span className='cursor-pointer' initial={{translateX : 100, opacity : 0}} animate={{translateX:0, opacity:1}} exit={{translateX : 100, opacity : 0}}><BsSend/></motion.span>}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2nd Col about TEAM */}
            <div className='col-span-1 row-span-6 flex flex-col gap-5 '>
                {/* TOP DIV */}
                <div className='flex flex-col gap-5 bg-white rounded-[32px] p-[1.2rem_1.5rem_1rem_1.5rem]  '>
                    {/* How many members are there? */}
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>Activity Chiaki</p>
                        <div className='flex gap-[6px] items-center p-[6px_12px] bg-[#e7e8f0] rounded-[20px]'>
                            <span className='text-[20px]'><MdOutlinePersonOutline/></span>
                            <p>8</p>
                        </div>
                    </div>
                    {/* Members */}
                    <div className='flex flex-col gap-5 border-b-2 pb-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                {/* PROFILE IMG */}
                                <div className=' rounded-[29px] overflow-hidden w-[42px] h-[42px]'>
                                    <img className='w-full' src="https://i.pinimg.com/564x/d0/11/a8/d011a88e17bb01c51752eb79a6c8e526.jpg" alt="Chiaki" />
                                </div>
                                <div className='pe-4'>
                                    <p className='font-semibold text-[14px]'>Aika Tsuda</p>
                                    <p className='text-[11px] text-[#b6b8cb]'>Oxford student</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-[#e7e8f0] p-[11px_1rem] rounded-[9999px] flex gap-2 items-center'>
                                    <span className='text-[22px]'><IoMdAddCircleOutline/></span>
                                </div>
                            </div>
                        </div>

                        {/* ------------COPY---------------- MEMBERS tiimes ustgah mapdah datagaar */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                {/* PROFILE IMG */}
                                <div className=' rounded-[29px] overflow-hidden w-[42px] h-[42px]'>
                                    <img className='w-full' src="https://i.pinimg.com/564x/95/1e/58/951e58d82203b63b4928bce3d1aac4e6.jpg" alt="Chiaki" />
                                </div>
                                <div className='pe-4'>
                                    <p className='font-semibold text-[14px]'>Mitsuri Kanroji</p>
                                    <p className='text-[11px] text-[#b6b8cb]'>Oxford student</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-[#e7e8f0] p-[11px_1rem] rounded-[9999px] flex gap-2 items-center'>
                                    <span className='text-[22px]'><IoMdAddCircleOutline/></span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                {/* PROFILE IMG */}
                                <div className=' rounded-[29px] overflow-hidden w-[42px] h-[42px]'>
                                    <img className='w-full' src="https://i.pinimg.com/564x/02/1b/70/021b70846652df3bc7225adf0cbef2a2.jpg" alt="Chiaki" />
                                </div>
                                <div className='pe-4'>
                                    <p className='font-semibold text-[14px]'>Kyo Koyama</p>
                                    <p className='text-[11px] text-[#b6b8cb]'>Oxford student</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-[#e7e8f0] p-[11px_1rem] rounded-[9999px] flex gap-2 items-center'>
                                    <span className='text-[22px]'><IoMdAddCircleOutline/></span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* Invite New Member */}
                    <div className='flex gap-2 items-center'>
                        <div className='text-[20px] bg-[#C4DDFF] p-3 rounded-[200px]'>
                            <span><GrAdd/></span>
                        </div>
                        <p className='font-semibold text-[14px]'>Invite New Member</p>
                    </div>
                </div>






                <div className='flex flex-col gap-3 bg-white rounded-[32px]  p-[1.2rem_1.5rem_1rem_1.5rem]  '>
                    
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <p className='font-semibold'>Date Night</p>
                            <p className='text-[12px]'>Because she is Dulguun&apos;s girlfriend</p>
                        </div>
                    </div>
                    <div className='bg-[#e7e8f0] flex justify-between p-3 rounded-[.825rem] '>
                            <div className='flex gap-3 items-center'>
                                <span><FiClock/></span>
                                <p className='text-[14px]'>16:30 - 23:59</p>
                            </div>
                    </div>
                    <div className='bg-[#e7e8f0] flex justify-between p-3 rounded-[.825rem] '>
                        <div className='flex gap-3 items-center'>
                            <span><HiOutlineCalendar/></span>
                            <p className='text-[14px]'>Friday, 12 January</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                        <p className='font-semibold'>Mentors</p>
                        <div className='flex '>
                            <div className='w-[30px] h-[30px] rounded-[15px] relative flex items-center'>

                                <div className='w-[30px] h-[30px] bg-black rounded-[15px] border-2 border-[#e7e8f0] absolute top-[0] left-[0]'>
                                    <img className='w-full rounded-[15px]' src="https://i.pinimg.com/564x/45/35/cf/4535cfdc80a589ed1e2df9eb40ba8a2c.jpg" alt="" />
                                </div>
                
                                {/* absolute pictures */}
                                <div className='w-[30px] h-[30px] bg-black rounded-[15px] border-2 border-[#e7e8f0] absolute top-[0] left-[20px]'>
                                    <img className='w-full rounded-[15px]' src="https://i.pinimg.com/564x/39/fd/72/39fd72a4478484e523734f0734fd488e.jpg" alt="" />

                                </div>
                                <div className='w-[30px] h-[30px] bg-black rounded-[15px] border-2 border-[#e7e8f0] absolute top-[0] left-[40px]'>
                                    <img className='w-full rounded-[15px]' src="https://i.pinimg.com/564x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg" alt="" />
                                </div>
                                <div className='w-[30px] h-[30px] bg-black rounded-[15px] border-2 border-[#e7e8f0] absolute top-[0] left-[60px]'>
                                    <img className='w-full rounded-[15px]' src="https://i.pinimg.com/564x/44/a2/88/44a288c233f2c9121468abb62d6fbcf5.jpg" alt="" />
                                </div>
                                <div className='w-[30px] h-[30px] bg-black rounded-[15px] border-2 border-[#e7e8f0] absolute top-[0] left-[80px]'>
                                    <img className='w-full rounded-[15px]' src="https://i.pinimg.com/564x/c3/a5/6f/c3a56fd36c7e8fd54cef8cbdac00de41.jpg" alt="" />
                                </div>
                                <div className='w-[30px] h-[30px] bg-[#C4DDFF] rounded-[15px] border-2 border-[#e7e8f0] absolute top-[0] left-[100px] flex items-center justify-center'>
                                    <p className='text-[12px]'>+18</p>
                                </div>
                            </div>
                    
                        </div>
                    </div>

                </div>
            </div>

            <div className='col-span-1 bg-white rounded-[32px] p-[1.2rem_1.5rem] row-span-6 gap-3 flex flex-col'>
                <p className='font-medium text-[20px] my-1'>What to Do </p>
                {/* Schedule */}
                <div className='flex flex-col gap-4'>
                    {dateNight.map((idea, idx) => (
                        <div key={idx} className='flex justify-between items-center p-5 bg-[#e7e8f0] rounded-[15px]'>
                            <div className='flex gap-2 items-center'>
                                <span className='text-[20px]'><HiOutlineSparkles/></span>
                                <p className='font-semibold '>{idea.listItem}</p>
                            </div>
                            <div>
                                <p className='font-medium'>{idea.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </Navbar>
  )
}

export default MyActivity

const dateNight = [
    {
        listItem : 'Indoor Picnic',
        time : '4:00'
    },
    {
        listItem : 'Naked Twister',
        time : '4:00'
    },
    {
        listItem : 'Xbox Dancing Game',
        time : '4:00'
    },
    {
        listItem : 'Sexy Shower',
        time : '4:00'
    },
    {
        listItem : 'Video Game Battle',
        time : '4:00'
    },
    {
        listItem : 'Homemade Movie',
        time : '4:00'
    },
    {
        listItem : 'Cooking Competition',
        time : '4:00'
    }
    
]

