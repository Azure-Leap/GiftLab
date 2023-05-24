import React from 'react'
import { BsHeart } from 'react-icons/bs'

const Comment = () => {
  return (
        <div className=' bg-transparent '>
        {/* the smo who commented */}
            <div className='flex gap-5 items-start shadow-[1px_1px_4px_rgba(0,0,0,.5)] p-5 rounded-[32px] '>
                <div className='flex items-start gap-3'>
                        {/* PROFILE IMG */}
                        <div className=' w-[90px] h-[90px]'>
                            <img className='w-full rounded-[123123px]' src="https://i.pinimg.com/564x/95/1e/58/951e58d82203b63b4928bce3d1aac4e6.jpg" alt="Chiaki" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            {/* Profile and comment status */}
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-semibold text-[14px]'>Mitsuri Kanroji</p>
                                    <p className='text-[11px] text-[#b6b8cb]'>commented on event. 1h ago</p>
                                </div>
                                <div>
                                    <span className='cursor-pointer'><BsHeart size={14}/></span>
                                </div>
                            </div>

                            {/* Comment */}
                            <div>
                            <p className='text-[#574e58] text-[14px] tracking-[0.04rem]'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, possimus neque? Distinctio nulla asperiores nisi voluptate dolorum vero earum a!</p>
                            </div>

                            {/* Reply
                            <div>
                                <input className='bg-[linear-gradient(90deg,#e7e8f0,#dcd9ec)] shadow-[0px_0px_3px_rgba(0,0,1,0.5)] outline-none rounded-[12px] p-2 w-full' type="text" placeholder='Reply' />
                            </div> */}
                        </div>
                </div>

            </div>
        </div>
  )
}

export default Comment