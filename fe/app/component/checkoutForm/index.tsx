'use client'

import { useCartStore } from '@/context/store'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

const CheckOutForm = () => {
    const {filteredCarts, setCheckout} = useCartStore()
    const [isLoading, setIsLoading] = useState(false)
    const totalPrice = filteredCarts.reduce((acc, item : any) => {
        return acc + item.unit_amount! * item.quantity
    }, 0)

    useEffect(()=>{
        setCheckout('checkout')
    },[])

    const submit = async(e : any) => {
        // hooson bol valuenuud
        setIsLoading(true)
        // const res = await axios.get('http://localhost:8000/users/', {})
        setTimeout(() => {
            setIsLoading(false)
            setCheckout('success')
        }, 2000);
    }
  return (
    <div className='text-gray-600'>
        <h1>Checkout Form</h1>
        <div>
            
        </div>

        {/* Total */}
        <h1 className='py-4 text-sm font-bold'>Total: {totalPrice}</h1>
        <button className='py-2 mt-4 bg-teal-700 rounded-md text-white disabled:opacity-25' onClick={submit}>
            <span>
                {isLoading ? <span>Processing 👀</span> : <span> Pay now 🔥</span>}
            </span>
        </button>
    </div>
  )
}

export default CheckOutForm