'use client'
import React, { useState } from "react";
import AddProduct from "./AddProduct";
import AddDonation from "./AddDonation";
import AddEvent from "./AddEvent";
import { useDashboardType } from "@/context/dashboard";
import {motion} from 'framer-motion'
import Navbar from "../component/layout/Navbar";
import OverviewPost from "./OverviewPost";

const AddProducts = () => {



  const {dashboardTypeState, setDashboardTypeState} = useDashboardType()
  // const [showAddProduct, setShowAddProduct] = useState(true);
  // const [showAddEvent, setShowAddEvent] = useState(false);
  // const [showAddDonation, setShowAddDonation] = useState(false);

  // const handleAddProduct = () => {
  //   setShowAddProduct(!showAddProduct);
  //   setShowAddEvent(false);
  //   setShowAddDonation(false);
  // };

  // const handleAddEvent = () => {
  //   setShowAddEvent(true);
  //   setShowAddProduct(false);
  //   setShowAddDonation(false);
  // };

  // const handleAddDonation = () => {
  //   setShowAddDonation(true);
  //   setShowAddProduct(false);
  //   setShowAddEvent(false);
  // };


  return (
    <Navbar>
    <div className=" col-span-3  h-[93vh]">
      <div className="mt-5 flex justify-evenly border-b-2 border-[#000] p-2">
        {/* <div className="flex gap-2 items-center group">
          <button className="text-md font-bold text-black group-hover:text-[#7373ff]">
            Overview
          </button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye text-black font-bold group-hover:text-[#7373ff]"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />{" "}
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />{" "}
            </svg>
          </span>
        </div> */}
        {btns.map((btn, key) => (
            <div key={key} className="relative">
                <div
                    className="text-md font-semibold p-[10px_32px]"
                    onClick={()=>setDashboardTypeState(btn.tag)}
                    >
                  <motion.span layout className="z-40 mix-blend-exclusion text-yellow-50 ">{btn.title}</motion.span>
                {dashboardTypeState === btn.tag && <motion.div layoutId="btn" style={{borderRadius : '32px'}} className="bg-[#000] w-full h-full top-0 rounded-[8px] absolute z-20"/>}

                </div>
            </div>
        ))}
      </div>
      <div className="">
        {dashboardTypeState === 'payment' ? <AddProduct/> :
                  dashboardTypeState ===  'event' ? <AddEvent/> :
                  dashboardTypeState === 'donation' ? <AddDonation/> : <OverviewPost/> }
    
      </div>
    </div>
    </Navbar>
  );
};

export default AddProducts;

const btns = [
  {
    title : 'Постоо хянах',
    tag : 'overview'
  },
  {
    title : 'Бүтээгдэхүүн нэмэх',
    tag : 'payment'
  },
  {
    title : 'Хандив үүсгэх',
    tag : 'donation'
  },
  {
    title : 'Сайн дурын ажил өрнүүлэх',
    tag : 'event'
  }
]