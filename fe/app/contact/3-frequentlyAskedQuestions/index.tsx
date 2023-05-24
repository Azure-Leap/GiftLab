'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import {motion, AnimatePresence} from 'framer-motion'
import IntroContactFrequentlyAskedQuestions from './frequentlyAsked'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'



const frequentlyAskedQuestions = [
  {
    question : 'How can I tell my girlfriend is beautiful?',
    answer : `Go for a humorous option if shes a jokester. `
  },
  {
    question : 'If you had the power of invisibility for one whole day, what would you do?',
    answer : `Go for a humorous option if shes a jokester. `
  },
  {
    question : 'If curiosity killed the cat, then who did stupidity kill?',
    answer : `Go for a humorous option if shes a jokester. `
  },
  {
    question : 'What’s the weirdest conversation you’ve overheard?',
    answer : `Go for a humorous option if shes a jokester. `
  },
  {
    question : 'If we were in a horror movie, how early are we going to die?',
    answer : `Go for a humorous option if shes a jokester. `
  },
]

const IntroContactFrequentlyAskedQ = () => {
  gsap.registerPlugin(ScrollTrigger)
  let title = useRef<gsap.DOMTarget>();
  let questions = useRef<gsap.DOMTarget>();

  useEffect(()=>{
    let hideTitle = gsap.to(title, {opacity : 0, y:20}).progress(1);
    ScrollTrigger.create({
      trigger : title.current, 
      start : '-200%',
      // markers : true,
      animation : gsap.to(title, {opacity : 1, y : 0})
    })
    let hideQuestions = gsap.to(questions, {opacity : 0, y:20}).progress(1);
    ScrollTrigger.create({
      trigger : title.current, 
      start : '-150%',
      // markers : true,
      animation : gsap.to(questions, {opacity : 1, y : 0, ease : 'back.out(4)', duration : .8})
    })
  },[])


  return (
    <div className='mt-[92px] mb-[150px] max-w-[1260px] mx-auto h-[100vh] flex flex-col gap-3'>
        <div ref={el => title.current = el} className='text-center flex flex-col gap-3 mb-[28px]'>
            <p className='text-[18px] tracking-[0.06rem] font-bold'>NEED MORE INFORMATION?</p>
            <p className='text-[38px] tracking-[0.04rem] font-semibold'>Frequently Asked Questions</p>
            <p className='text-[18px] tracking-[0.04rem] font-medium text-[#39394f]'>Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole <br /> elementum eu facilisis faucibus interdum posuere.</p>
        </div>
        <div ref={el => questions.current =el} className='flex flex-col gap-8'>
          {frequentlyAskedQuestions.map((question, idx) => <IntroContactFrequentlyAskedQuestions key={idx} {...question}/>)}
        </div>
    </div>
  )
}

export default IntroContactFrequentlyAskedQ