import { useEffect, useState } from "react";
import { useCartStore } from "@/context/store"
import {IoAddCircle, IoChevronBackOutline, IoRemoveCircle} from 'react-icons/io5'
import {AnimatePresence, motion} from 'framer-motion'

import EmptyStore from "./empty-store-chibi";
import { BsChevronLeft } from "react-icons/bs";
import PaymentOrderBtn from "./BtnPaymentOrder";
import { IoMdAdd } from "react-icons/io";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import CartItemPayment from "./CartItemPayment";
import CartItemEvent from "./CartItemEvent";
import CartItemDonation from "./CartItemDonation";
import DonoOrderBtn from "./BtnDonoOrder";
import ActivityCheersBtn from "./BtnActivityCheers";
import CheckOut from "../../checkout";
import SuccessPage from "../../OrderConfirmed.tsx";

const typesOfOurPosts = [
  {type : 'payment', title : 'Payment'}, 
  {type : 'event', title : 'Activity'}, 
  {type : 'donation', title : 'Contributions'}, 
  
]

const Cart = () => {

  const cartStore = useCartStore();

  // Morph Effect ==> types
  const [activeType, setActiveType] = useState(typesOfOurPosts[0].type);

  // const [lastActivatedType, setLastActivatedType] = useState()
  
  useEffect(()=>{
    cartStore.setFilteredCarts(activeType)
  },[]);

  return (
    <motion.div
      layout
      initial = {{opacity : 0}}
      animate = {{opacity : 1}}
      exit = {{opacity : 0}}
      onClick={()=> cartStore.toggleCart()} 
      className="fixed top-0 left-0 w-full h-full bg-black/25 z-[1000] ">
        {/* WhiteBoard lol */}
        <motion.div
          layout
          onClick={(e) => e.stopPropagation() } 
          className={`w-2/5 h-full bg-home-page absolute top-0 right-0 rounded-[40px_0_0_40px] p-[24px_36px_24px_36px] overflow-scroll flex flex-col ${cartStore.filteredCarts.length == 0 ? '' : ' justify-between'}`}>
                  {/* CHECKOUT */}
                  {cartStore.onCheckout === 'cart' && 
                      <>
                        <motion.div>

                            <div className="flex justify-between">
                              <button
                                    className=" rounded-[32px] text-black p-[10px_20px] flex gap-1 items-center  " 
                                  onClick={()=>cartStore.toggleCart()}>
                                    <IoChevronBackOutline size={21}/> 
                                    {/* <span>Back to GiftLab Page</span> */}
                              </button>
                              <p>My Cart</p>
                              <div>
                                Save
                              </div>
                            </div>


                              
                            <div className="grid grid-cols-3 items-center py-4 gap-3 px-5">

                            

                              {/* Cart TYPES */}
                              {typesOfOurPosts.map(type => (
                                <>
                                  <p onClick={()=>{
                                    cartStore.setFilteredCarts(type.type);
                                    setActiveType(type.type);
                                    // setLastActivatedType(type.type)
                                  }} className=" bg-btn-bg-grey flex justify-center items-center rounded-[10px] relative cursor-pointer">
                                  {type.type === activeType && <motion.div layoutId="types" className="bg-[#000] inset-0 top-0 rounded-[10px] absolute z-20"/>}
                                    <span className="z-30 mix-blend-exclusion text-white">{type.title}</span>
                                    
                                  </p>
                                </>
                              ) )}
                            </div>
                          
                          {/* Cart Items */}
                          {cartStore.filteredCarts.map((cartItem, idx) => (
                              cartItem.type === 'payment' ? <CartItemPayment key={idx} cartItem={cartItem}/> :
                              cartItem.type === 'event' ? <CartItemEvent key={idx} cartItem={cartItem}/> :
                              cartItem.type === 'donation' ? <CartItemDonation key={idx} cartItem={cartItem}/> : ''
                            ))}
                        </motion.div>

                      <motion.div layout>
                            
                        {cartStore.filteredCarts.length > 0 && activeType =='payment' &&   <PaymentOrderBtn/>}
                        {cartStore.filteredCarts.length > 0 && activeType =='event' &&   <ActivityCheersBtn/>}
                        {cartStore.filteredCarts.length > 0 && activeType =='donation' &&   <DonoOrderBtn/>}

                        </motion.div>

                      
                      </>}

                      {/* Check Out Form */}
                      {cartStore.onCheckout === 'checkout' && <CheckOut/>}
                      {cartStore.onCheckout === 'success' && <SuccessPage/>}


            <AnimatePresence>
              {!cartStore.filteredCarts.length && cartStore.onCheckout === 'cart' && <EmptyStore/>}
            </AnimatePresence>
        </motion.div>
    </motion.div>
  )
}

export default Cart