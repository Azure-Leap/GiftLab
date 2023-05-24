import { useDashboardType } from '@/context/dashboard'
import axios from 'axios'
import React from 'react'

const SaveBtn = () => {
    const {addProductAndDonationEvent} = useDashboardType()
  return (
    <button onClick={async()=>{
        try {
            const res = axios.post('http://localhost:8000/posts', addProductAndDonationEvent)

        } catch (error) {
            console.log(error)
        }        
        }} className=" bg-[#7373ff] rounded-xl py-4 px-10 text-md font-bold text-white duration-300 hover:translate-y-1 mb-4">
        <span className="group-hover:translate-x-2">Save</span>
    </button>
  )
}

export default SaveBtn