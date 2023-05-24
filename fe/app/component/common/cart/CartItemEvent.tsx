import React from 'react'
import { useCartStore } from '@/context/store'
import {AnimatePresence, motion} from 'framer-motion'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { IoLocationOutline, IoPeopleOutline } from 'react-icons/io5'
import { BsChatQuote, BsPeople, BsPerson } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { BiWinkSmile } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

const CartItemEvent = ({cartItem} : any) => {
    console.log(cartItem);
    const cartStore = useCartStore()
  return (
    <motion.div
        layout 
        initial = {{opacity : 0, scale: 0.3}}
        animate = {{opacity : 1, scale : 1}}
        // exit={{opacity : 0}}
        key={cartItem.id} className=" flex gap-5 justify-between items-start bg-white rounded-[20px] overflow-hidden my-8 p-3">
            <div className='bg-white grid grid-cols-3 rounded-[8px] gap-4 cursor-pointer'>
                <div className='col-span-1 flex flex-col items-center gap-2'>
                    <img className='h-[100px] w-[200px] object-cover rounded-[12px] p-1 border-2 border-[#e7e8f0]' src={cartItem.image} alt="" />
                    <button className='bg-[#e7e8f0] p-1 rounded-[10px] w-[90%] font-semibold outline hover:outline-offset-2 outline-[#e7e8f0] duration-300 group '><p className='duration-300 group-hover:scale-[0.95]'>{cartItem.isForm ? 'Form' : 'Join'}</p></button>
                </div>

                <div className='col-span-2  flex flex-col  py-2'>
                    <div className='col-span-1  flex flex-col gap-2  '>

                        {/* Event By */}
                        {/* <div className='flex gap-1 items-center ms-3'>
                            <span className='font-semibold text-[14px]'><BsPerson size={19} /></span>
                            <p className='text-[14px] font-semibold'>{cartItem.whoPosted}</p>
                            
                        </div> */}

                        {/* Members */}
                        <div className='flex gap-1 items-center '>
                            <span><IoPeopleOutline size={19}/></span>
                            <p className='font-semibold text-[14px]'>{cartItem.limit ? `${cartItem.members} / ${cartItem.limit}` : `${cartItem.members}`} people going</p>
                        </div>

                        {/* Location */}
                        <div className='flex gap-1 items-center '>
                            <span><IoLocationOutline size={19}/></span>
                            <p className='text-[14px] font-semibold'>{cartItem.locationSpecific}</p>
                        </div>
                        
                        <div className='flex gap-1 items-start'>
                            <span className='mt-1'><BiWinkSmile/></span>
                            <p>We have a lot of work to do, and your generous donation helps us get that important work done.</p>
                        </div>
                        {/* Duration */}
                        {/* <div className='flex gap-2 items-center ms-3'>
                            <span><FiClock/></span>
                            <p className='text-[14px] font-semibold'>{cartItem.duration}</p>
                        </div> */}

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

export default CartItemEvent