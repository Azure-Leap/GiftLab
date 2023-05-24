import React from 'react'
import { useCartStore } from '@/context/store'
import {AnimatePresence, motion} from 'framer-motion'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'

const CartItemPayment = ({cartItem} : any) => {
    console.log(cartItem);
    const cartStore = useCartStore()
  return (
    <motion.div
        layout 
        initial = {{opacity : 0, scale: 0.3}}
        animate = {{opacity : 1, scale : 1}}
        // exit={{opacity : 0}}
        key={cartItem.id} className=" flex gap-5 justify-between items-center bg-white rounded-[20px] overflow-hidden my-8 p-3">
        <div className="flex gap-5 items-center">
        <img className="h-[150px] w-[66%] object-cover border-2 border-[#eee] rounded-[16px] p-1" src={cartItem.image} alt="a" />
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
            <div className="flex flex-col">
                <p className="text-[18px] font-normal">{cartItem.title}</p>
                <p className='text-[#615e5a] text-[12px]'>Jewelry</p>
            </div>
            <p className="text-[#615e5a] text-[14px]">We have a lot of work to do, and your generous donation helps us get that important work done...</p> 
            </div>
            <div>
            <p className="text-[18px] font-bold">{cartItem.price}</p>
            </div>
        </div>
        </div>

        <div className="flex flex-col gap-3 items-center bg-[#e7e8f0] p-2 rounded-[12px]">

            <button onClick={()=>{
                cartStore.addPostToCart(cartItem)
                cartStore.setFilteredCarts(cartItem.type)
            }}><GrFormAdd size={20}/></button>
            <p className="text-[18px] font-medium">{cartItem.quantity}</p>
            <button onClick={()=>{
                cartStore.removePost(cartItem);
                cartStore.setFilteredCarts(cartItem.type)
            }}><GrFormSubtract size={20}/></button>
            </div>
    </motion.div>
  )
}

export default CartItemPayment