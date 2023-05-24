'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation' 
import { useCartStore } from '@/context/store'
import { useUser } from '@/context/user'
import CheckOutForm from '../checkoutForm'
import OrderLoadsUp from '../paymentOkAnimation'
import {motion} from 'framer-motion'


const CheckOut =  () => {
  const {cart, paymentIntent, setCheckout, setPaymentIntent, filteredCarts} = useCartStore();
  const [isLoading, setIsLoading] = useState(false)
  const user : any = useUser().userData
  const id = user.id 
  const router = useRouter()

  async function createPaymentIntent() {
    try {
      setIsLoading(true)
      const res  = await axios.post('http://localhost:8000/create-payment-intent', {items : filteredCarts , paymentIntentId : paymentIntent, userId : id })
      console.log(res);
      console.log(res.data.paymentIntent._id)
      setPaymentIntent(res.data.paymentIntent.id)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);

    } catch (error) {
      // return router.push('/login')
      console.log(error);
    }
    
}


    useEffect(()=>{
        // create Payment Intent asa the page loads up
        createPaymentIntent()
    },[])
    
  return (
    <div>
      {isLoading && <OrderLoadsUp/>}
      {!isLoading && (
            <motion.div initial={{y : -100, opacity : 0}} animate={{y:0, opacity:1}} onClick={()=>{setCheckout('cart')}}>
              <CheckOutForm/>
            </motion.div>
      ) }
    </div>
  )
}

export default CheckOut

