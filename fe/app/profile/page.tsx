'use client'
import React, { useState } from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'
import GiftLabSocialLinks from '../component/common/OurLinks'
import Navbar from '../component/layout/Navbar'
import {motion,AnimatePresenceProps} from 'framer-motion'
import ProfileComments from './comments'
import { useUser } from '@/context/user'

const ProfilePublic = () => {

  // const {profileComments} = useUser().checkUserProfile.user
  // console.log(profileComments)

  const [activeProfileFilterItem, setActiveProfileFilterItem] = useState()

  return (
    <Navbar>
        <div className='grid grid-cols-3 col-span-3 h-[93vh]'>
          <div className='col-span-1 h-full'>

              {/* Profile card */}
              <div className='w-full p-[2rem_1.5rem] flex flex-col items-center gap-2'>
                {/* Profile pic */}
                <img className='w-[140px]  h-[140px] object-cover rounded-[123px] p-[6px] bg-white border-[3px] border-[#59CE8F]' src="https://i.pinimg.com/564x/9b/fd/f5/9bfdf559d7dd405061560b7dace6417a.jpg" alt="" />
                <div className='text-center'>
                  <p className='font-semibold text-[18px]'>Chiaki Koga</p>
                  <p className='text-[14px] font-light'>@yoona</p>
                              {/* bio */}
                  <p className='text-[#39394f] text-[12px] mt-2 font-semibold'>aaa</p>
                </div>
              </div>


                {/* Points */}
                <div className=' p-4  '>
                    <div className='flex gap-2 items-center justify-start border-t-2 border-b-2 border-[#DBDFEA] p-4 '>
                      <div className='flex gap-1 items-center text-[20px]'>
                        <span><HiOutlineSparkles size={20}/></span>
                        <p>8</p>
                      </div>
                      <p className='font-semibold'>(Giftlab Points)</p>
                    </div>
                </div>

                {/*  */}
                <div className=' p-[4px_16px]'>
                    <div className='flex flex-col gap-1  border-b-2 border-[#DBDFEA] pb-6 '>
                      <p className='font-semibold ps-2 text-[16px]'>Achievements</p>

                        {/* Achievements */}
                        <div className='w-[50px] h-[50px] rounded-[25px] relative flex items-center'>
                            <div className='w-[50px] h-[50px] bg-transparent rounded-[25px] border-2 border-[#e7e8f0] absolute top-[0] left-[0]'>
                                <img className='w-full rounded-[25px]' src="/achievementsIcon/a1.png" alt="" />  
                            </div>

                            {/* absolute pictures */}
                            <div className='w-[50px] h-[50px] bg-black rounded-[25px] border-2 border-[#e7e8f0] absolute top-[0] left-[30px]'>
                                <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/39/fd/72/39fd72a4478484e523734f0734fd488e.jpg" alt="" />

                            </div>
                            <div className='w-[50px] h-[50px] bg-black rounded-[25px] border-2 border-[#e7e8f0] absolute top-[0] left-[60px]'>
                                <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg" alt="" />
                            </div>
                            <div className='w-[50px] h-[50px] bg-black rounded-[25px] border-2 border-[#e7e8f0] absolute top-[0] left-[90px]'>
                                <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/44/a2/88/44a288c233f2c9121468abb62d6fbcf5.jpg" alt="" />
                            </div>
                            <div className='w-[50px] h-[50px] bg-black rounded-[25px] border-2 border-[#e7e8f0] absolute top-[0] left-[120px]'>
                                <img className='w-full rounded-[25px]' src="/achievementsIcon/a2.png" alt="" />
                            </div>
                            {/* <div className='w-[50px] h-[50px] bg-[#C4DDFF] rounded-[25px] border-2 border-[#e7e8f0] absolute top-[0] left-[150px] flex items-center justify-center'>
                                <p className='text-[15px]'>+5</p>
                            </div> */}
                        </div>
                    </div>
                    
                </div>

                {/* Links */}
                <div className='p-4 flex flex-col gap-2'>
                    <p className='semi-bold ps-2 text-[16px] font-semibold'>Social Links</p>
                    <GiftLabSocialLinks/>
                    {/* <div className='flex flex-col gap-4'>
                        <div className='flex gap-2'>
                            <span></span>
                        </div>
                    </div> */}
                </div>
          </div>
          <div className='col-span-2 h-full  bg-white rounded-[2.5rem]  bg-[linear-gradient(90deg,#e7e8f0,#dcd9ec)] shadow-[5px_1px_8px_rgba(0,0,0,0.5)]'>
            {/* top */} 
            <div>
                {/* filter */}
                <div className='flex border-b-2 border-[#e7e8f0] p-[1rem_2rem]  text-[18px] '>
                    {profileFiltersData.map(({title, tag}, idx) => (
                        <div key={idx} onClick={()=>{
                          setActiveProfileFilterItem(tag)
                              }} 
                             className='flex gap-2 items-center relative p-[10px_32px] cursor-pointer'>
                              <div className='z-30 mix-blend-exclusion text-white flex gap-1 items-center'>
                                  <p className='mix-blend-exclusion text-white z-30'>{title}</p>
                                  {/* {profileFiltersData[idx].tag === 'comments' && (profileComments.comments.length) } */}
                              </div>
                          {activeProfileFilterItem === tag && <motion.div layoutId='profileFilter' style={{borderRadius : '16px'}} className='absolute top-0 z-20 inset-0 bg-[linear-gradient(90deg,#e7e8f0,#dcd9ec)] shadow-[1px_1px_3px_rgba(0,0,0,0.5)]'/>}
                          {/* <span className='rounded-[32112px] p-[4px_6px] text-[12px] bg-[#e7e8f0]'>+8</span> */}
                        </div>
                    ))}
                </div>


                
            </div>

            {/* Bot */}
            <div className=' p-[1.2rem_2rem_2rem_2rem] '>
              {/* Comments */}
              <ProfileComments/>
            </div>
          </div>
        </div>
    </Navbar>
  )
}

const profileFiltersData = [
  {
  title : 'Completed',
  tag : 'completed'
  },
                    {
  title : 'Upcoming Event',
  tag : 'upcomingEvent'
  },
                    {
  title : 'Donated',
  tag : 'donated'
  },
                    {
  title : 'Donate',
  tag : 'donate'
  },
                    {
  title : 'Comments',
  tag : 'comments'
  }
]



export default ProfilePublic