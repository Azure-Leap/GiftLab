import React, { useState } from 'react'
import { useCartStore } from '@/context/store'
import {AnimatePresence, motion} from 'framer-motion'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { TbCurrencyDollar } from 'react-icons/tb'
import { BsChatQuote, BsPeople, BsPerson } from 'react-icons/bs'
import { FiClock, FiDollarSign } from 'react-icons/fi'
import { HiOutlineCurrencyDollar, HiOutlineSparkles } from 'react-icons/hi'
import { BiWinkSmile } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiMentalHealthLine } from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'

const CartItemDonation = ({cartItem} : any) => {

    const [isThereMouseOver, setIsThereMouseOver] = useState(false)

    let percentage = cartItem.reached/cartItem.goal*100;

    const cartStore = useCartStore()
  return (
    <motion.div
        layout 
        initial = {{opacity : 0, scale: 0.3}}
        animate = {{opacity : 1, scale : 1}}
        // exit={{opacity : 0}}
        onMouseOver={()=>{
            setIsThereMouseOver(false)
        }}
        key={cartItem.id} className=" flex gap-5 justify-between items-start bg-white rounded-[20px]  my-8 p-3">
            <div className='bg-white grid grid-cols-3 rounded-[8px] gap-4 cursor-pointer'>
                <div className='col-span-1 flex flex-col items-center gap-2'>
                    <img className='h-[100px] w-[200px] object-cover rounded-[12px] p-1 border-2 border-[#e7e8f0]' src={cartItem.image} alt="" />
                    {/* <button className='bg-[#e7e8f0] p-1 rounded-[10px] w-[90%] font-semibold'>Donate</button> */}
                    <input className='bg-[#e7e8f0] p-1 rounded-[10px] w-[90%] font-semibold placeholder-black text-center  justify-center' type="text" placeholder='Donate' />
                </div>

                <div className='col-span-2  flex flex-col  py-2'>
                    <div className='col-span-1  flex flex-col gap-4  '>
                        {/* Members */}
                        <div className='flex gap-1 items-center ms-3'>
                        <span><RiMentalHealthLine size={19}/></span>
                        <p className='font-semibold text-[14px]'>{cartItem.donatedPeople} people donated</p>
                        </div>
              
                        {/* Event By */}
                        <div className='flex gap-1 items-center ms-3'>
                            <span className='font-semibold text-[14px]'><BsPerson size={19} /></span>
                            <p className='text-[14px] font-semibold'>{cartItem.whoPosted}</p>
                        </div>

                        {/* Location */}
                        <div className='flex gap-1 items-center ms-3'>
                            <span><IoLocationOutline size={19}/></span>
                            <p className='text-[14px] font-semibold'>{cartItem.locationSpecific}</p>
                        </div>

 
                        <div  className='flex gap-2 items-center ms-3 relative'>
                            <span><AiOutlineHeart size={19}/></span>
                            <div onMouseOver={(e)=>{
                                e.stopPropagation();
                                setIsThereMouseOver(true);
                            }} className='w-[60%] bg-[#e7e8f1] h-[10px] rounded-[20px] overflow-hidden'>
                                <div className={`w-[${percentage}%] h-full bg-[#6B6A62] rounded-[20px]`}></div>

                                {/* Hover text */}
                                <AnimatePresence>
                                    {isThereMouseOver && <motion.div initial={{opacity : 0, scale : 0.3}} animate={{opacity : 1, scale:1, transformOrigin : 'top'}} exit={{opacity:0, scale:0}} className=' z-20 absolute -top-[50%] bg-[#e7e8f0] p-[18px_10px] rounded-[20px] w-[125%] '>
                                            {/* Duration */}
                                            <div className='flex gap-2 items-center ms-1' >
                                                {/* <span><TbCurrencyDollar color='#85bb65' size={19}/></span> */}
                                                <div className='flex'>
                                                    <p className='text-[1rem] font-bold'>${cartItem.reached} / </p>
                                                    <p className='text-[12px] font-semibold flex items-end text-[#B7B7B7] italic'>${cartItem.goal} raised</p>
                                                </div>
                                            </div>
                                            <div className='mt-3'>
                                                <div>
                                                    {/* <p className='text-[14px] font-semibold'>目的</p> */}
                                                    <div className='flex flex-col gap-2'> 
                                                        {cartItem.goals.map((goal : any, idx : any) => (
                                                            <div key={idx} className='flex items-center ms-1 gap-1'>
                                                                <span><HiOutlineSparkles size={16} color='#000'/></span>
                                                                <p className='text-[1rem] font-medium'>{goal.title}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        }
                                </AnimatePresence>
                            </div>
                            <p className='text-[12px] ms-2'>{percentage}%</p>
                        </div>
                    </div>
                </div>
                
            </div>

          
                
            <button 
                className='bg-[#e7e8f0] p-1 rounded-[1312px]'
                onClick={()=>{
                cartStore.removePost(cartItem);
                cartStore.setFilteredCarts(cartItem.type)
            }}><MdDeleteOutline size={20}/>
            </button>
                
                
            
    </motion.div>
  )
}

export default CartItemDonation