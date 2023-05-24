'use client'
import React, { useState } from 'react'
import { AiOutlineBars, AiOutlineSearch } from 'react-icons/ai'
import { FaChevronRight } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'
import Navbar from '../component/layout/Navbar'
import EventDashboard from '../dashboard/eventss'
import EventDashboardPost from './eventDashboardPost'
import {AnimatePresence, motion} from 'framer-motion'
import MyActivity from '../myactivities/[id]/page'
import EventDashboardPostDetail from './eventDashboardPostDetail'
import { BsBorderAll } from 'react-icons/bs'
 
const RubyDD = () => {
    const [isUserPostClicked, setIsUserPostClicked] = useState(0)
    const [isEventTypeClicked, setIsEventTypeClicked] = useState(0)
  return (
    <Navbar>
        <div className=' col-span-3 h-[93vh] overflow-y-scroll'>
            {/* Content */}
            <div className=''>
                {/* like navbar */}
                {/* <div className='flex justify-end'>
                    <div className='flex gap-1 items-center'>
                        add post
                        <div className='flex items-center'>
                            <IoMdAdd/>
                            <p>Add</p>
                        </div>

                        <div>
                            <FiMoreVertical/>
                        </div>
                    </div>
                </div> */}

                {/* Conent */}
                <div className='flex justify-between items-center py-8 border-b-2 border-[#B7B7B7]'>
                    <p className='text-[36px] font-light tracking-[0.02rem]'>My Activity List</p>
                    <div className=' bg-white p-[8px_14px] flex items-center rounded-[30px]'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineSearch/>
                            <input className='outline-none p-2 w-[350px]' type='text' placeholder='Search'/>
                        </div>
                        <div>
                            <AiOutlineBars/>
                        </div>
                    </div>
                </div>

                {/* his/her posts */}
                <div className='flex gap-10 py-4 overflow-x-scroll text-black'>
                    {/* one post */}
                    {eventPosts.map((post, idx) => <EventDashboardPost key={idx} setIsUserPostClicked={setIsUserPostClicked} isUserPostClicked={isUserPostClicked} post={post}/>)}
                </div>

                {/* Activity list */}
                <div className='flex flex-col  '>
                    <div className='flex gap-16 p-[40px_0_30px_0]'>
                        {types.map((type, idx) => (
                            <div key={idx} onClick={()=>setIsEventTypeClicked(type.id)} className='relative flex gap-2 items-center p-[8px_16px] justify-center'>
                                 <div className='mix-blend-exclusion text-white z-20'>{type.title}</div>
                                 <div className='mix-blend-exclusion text-white z-20'>{type.icon}</div>
                                 {isEventTypeClicked === type.id && <AnimatePresence><motion.div layoutId="a" style={{borderRadius : '32px'}} className=" w-full h-full top-0  absolute bg-[#FFABAB] z-0"/></AnimatePresence>}

                            </div>
                        ))}
                    </div>
                    <motion.div layout className='flex flex-col overflow-y-scroll'>
                        <EventDashboardPostDetail/>
                    </motion.div>
                </div>

            </div>
        </div>
    </Navbar>
  )
}

const eventPosts = [
    {
        title : 'Chiaki cute',
        id : 0,
        upcoming : '69h'
    },
    {
        title : 'Chiaki cute',
        id : 1,
        upcoming : '69h'
    },
    {
        title : 'Chiaki cute',
        id : 2,
        upcoming : '69h'
    },
    {
        title : 'Chiaki cute',
        id : 3,
        upcoming : '69h'
    },
    {
        title : 'Chiaki cute',
        id : 4,
        upcoming : '69h'
    },
    {
        title : 'Chiaki cute',
        id : 5,
        upcoming : '69h'
    },
    
]

const types = [
    {
        title : 'All',
        icon : <BsBorderAll/>,
        id : 0
    },
    {
        title : 'Members',
        icon : <BsBorderAll/>,
        id : 1
    },
    {
        title : 'Pin',
        icon : <BsBorderAll/>,
        id : 2
    },
]

export default RubyDD