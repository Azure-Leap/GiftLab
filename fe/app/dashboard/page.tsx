'use client'
import { useDashboardType } from '@/context/dashboard'
import React from 'react'
import { BiDonateHeart } from 'react-icons/bi'
import { FaHandSparkles } from 'react-icons/fa'
import { VscSymbolEvent } from 'react-icons/vsc'
import {motion, AnimatePresence} from 'framer-motion'
import Navbar from '../component/layout/Navbar'
import SmoothMoveMaker from './smoothMoveMaker'
import { AiOutlineSearch } from 'react-icons/ai'
import DashboardEventBox from './eventss/DashboardEventBox'
import { HiBars3, HiBars4 } from 'react-icons/hi2'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import EventDashboard from './eventss'
import PaymentDashboard from './payment'
import DonationDashboard from './donation'

const Dashboard = () => {

    const {dashboardTypeState, setDashboardTypeState, setWhichTypeObject, whichTypeIdx, setDashboardTypeFilterChoice, dashboardTypeFilterChoice, setDashboardBarsState ,isDashboardBars} = useDashboardType();

  return (
   <Navbar>
        <div className='row-span-6 col-span-3'>
            <motion.div layout className='h-[93vh]  bg-[linear-gradient(180deg,#e0e4ec)] shadow-[0_0_10px_rgba(0,0,0,0.5)] border-[#bcc4d6] border-2 rounded-[32px]'>
                {/*  TOP   <===>  Payment or Donation or Eventss?? */}
                <div className='border-[#bcc4d6] border-b-2 flex items-center justify-between p-[.5rem_2rem] '>

                    {/* Dashboard Types */}
                   <div className='flex gap-16 '>
                        {whichDashboard.map(({title, tag, icon, id}, idx) => (
                                            <div key={idx} onClick={(e)=>{
                                                e.stopPropagation()
                                                setWhichTypeObject(id)
                                                setDashboardTypeState(tag)
                                            }} className={`flex gap-2 items-center text-[16px] font-medium duration-300 relative p-[0.5rem]   ${dashboardTypeState === tag ? '' : 'text-[#b1b9cd]'}`}>
                                                <span className={`z-20 ${dashboardTypeState === tag ? "text-[#000]" : 'text-[#b1b9cd]'} duration-300`}>{icon}</span>
                                                <p className='text-[#b1b9cd] mix-blend-exclusion z-20'>{title}</p>
                                                {dashboardTypeState === tag && <SmoothMoveMaker layoutId='type-state'/> }
                                            </div>
                        ))}
                   </div>

                   {/* Add new post */}
                   <div>
                        <button className=' bg-[linear-gradient(90deg,#e7e8f0,#dcd9ec)] shadow-[5px_1px_8px_rgba(0,0,0,0.5)] rounded-[32px] p-[0.4rem_2rem] me-[2rem]'>Add new post</button>
                   </div>
                </div>

                {/* Filter */}
                <div className='border-b-2 border-[#bcc4d6] p-[0.5rem_2rem] flex items-center justify-between'>
                    {/* All Events */}
                    <motion.div layout>
                        <motion.p layoutId='a' className='text-[#b1b9cd] font-semibold'>18 Events</motion.p>
                    </motion.div>

                    {/* Search client by name */}
                    <div className='flex gap-6 items-center justify-center '>
                            <div className='h-full bg-white p-[12px_1rem] shadow-[0_0_1px_rgba(0,0,0,0.2)] flex gap-4 rounded-[20px]'>
                                <span onClick={()=>{
                                    setDashboardBarsState(true)
                                }} className={`cursor-pointer duration-300 ${isDashboardBars ? 'text-black scale-[1.2]' : 'text-[#b1b9cd]'}`}><HiBars4 size={20}/></span>
                                <span onClick={()=>{
                                    setDashboardBarsState(false)
                                }} className={`cursor-pointer duration-300 ${isDashboardBars ? 'text-[#b1b9cd]' : 'text-[#000] scale-[1.1]'}`}><BsFillGrid3X3GapFill size={20}/></span>
                            </div>
                        <motion.div layout className='h-full flex gap-1  items-center rounded-[32px] border-2 bg-white shadow-[0_0_1px_rgba(0,0,0,0.2)]  p-[0.5rem_1rem]'>
                            <motion.span layout><AiOutlineSearch size={20}/></motion.span>
                            <motion.input layout placeholder='Search...' className='bg-transparent  outline-none ' type="text" />
                        </motion.div>

                    </div>

                    {/* filters */}
                    <motion.div layout className='flex items-center gap-6 '>
                        <p className='text-[14px] font-medium duration-300 '>Sort By:</p>
                        {whichDashboard[whichTypeIdx].sortBy.map((filter, key) => (
                            <div
                                key={key}
                                className='relative ' 
                                onClick={()=>{
                                setDashboardTypeFilterChoice(filter.tag)
                            }}>
                                <p className={` text-[14px] font-medium duration-300 cursor-pointer ${dashboardTypeFilterChoice === filter.tag ? 'text-[#]' : 'text-[#b1b9cd]' }`}>{filter.title}</p>
                                {/* {dashboardTypeFilterChoice === filter.tag && <SmoothMoveMaker layoutId='dashboard-type-filter-choice-state'/>} */}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {dashboardTypeState === 'event' && <EventDashboard/>}
                {dashboardTypeState === 'payment' && <PaymentDashboard/>}
                {dashboardTypeState === 'donation' && <DonationDashboard/>}
            </motion.div>
        </div>
   </Navbar>
  )
}

const whichDashboard = [
    {
        title : 'Donation',
        tag : 'donation',
        icon : <BiDonateHeart size={20}/>,
        sortBy : [
            {
                title : 'Title',
                tag : 'title'
            },
            {
                title : 'people',
                tag : 'members'
            },
            {
                title : 'Raised',
                tag : 'rating'
            },
            {
                title : 'Date',
                tag : 'date'
            }
        ],
        id : 0,
    },
    {
        title : 'Event',
        tag : 'event',
        icon : <VscSymbolEvent size={20}/>,
        sortBy : [
            {
                title : 'Title',
                tag : 'title'
            },
            {
                title : 'Members',
                tag : 'members'
            },
            {
                title : 'Rating',
                tag : 'rating'
            },
            {
                title : 'Date',
                tag : 'date'
            }
        ],
        id : 1
    },
    {
        title : 'Payment',
        tag : 'payment',
        icon : <FaHandSparkles size={20}/>,
        sortBy : [
            {
                title : 'Title',
                tag : 'title'
            },
            {
                title : 'Members',
                tag : 'members'
            },
            {
                title : 'Rating',
                tag : 'rating'
            },
            {
                title : 'Date',
                tag : 'date'
            }
        ],
        id : 2
    }
]

export default Dashboard

// bg-[linear-gradient(90deg,#e7e8f0,#dcd9ec)] shadow-[5px_1px_8px_rgba(0,0,0,0.5)]