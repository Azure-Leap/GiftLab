'use client'

import { useState, useEffect } from "react"
import {motion} from 'framer-motion'
import Image from "next/image"
import zaraki from '@/public/success/zarakikenpachi.webp'
import Link from "next/link"
import { useCartStore } from "@/context/store"


const SuccessPage = () => {
    const {setCheckout, toggleCart, setPaymentIntent,clearCart} = useCartStore()

    useEffect(()=>{
        setPaymentIntent('')
        clearCart()

    },[])

    const checkoutOrder = () => {
        setTimeout(() => {
            setCheckout('cart')
            
        }, 2000);
        toggleCart()

    }
    // const [first, setfirst] = useState(false)
  return (
    <motion.div className="flex flex-col items-center justify-center my-12" initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}}>
        <div className="p-12 rounded-md text-center ">
            <h1 className="text-2xl font-medium">Your order has been placed 🚀</h1>
            <h2 className="text-sm my-4">Check your email for the receipt</h2>
            <Image src={zaraki} alt='' className="py-8"/>
            <div className="flex items-center justify-center  gap-12">
                <Link href={'/dashboard'}>
                    <button onClick={checkoutOrder} className="font-medium">Check your Order</button>
                </Link>

            </div>
        </div>

    </motion.div>
  )
}

export default SuccessPage