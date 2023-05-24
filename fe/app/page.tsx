'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {BsArrowRight} from 'react-icons/bs'
import {HiArrowRight, HiOutlineSparkles} from 'react-icons/hi'
import {AnimatePresence, motion} from 'framer-motion'
import HomeIntro from './component/intro/Home'
import HomeMasarap from './component/home'
import { useLoginForm } from '@/context/loginform'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const { isThereUser} = useLoginForm();


  return (
    <main className='scroll-none'>
      {isThereUser ?  <HomeMasarap/> : <HomeIntro/> } 
    </main>
  )
}
