'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { introHomeNavItems } from '@/data/intro-home/navbar'
import HomeIntroFooter from '../Home/8-footer'
import NavItem from './navItem'



const HomeIntroNavbarAndFooter = ({children} : any) => {

  gsap.registerPlugin(ScrollTrigger)
    
  const tl = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})

  let navbar : any = useRef(null),
      containerRef : any = useRef(null);

  useEffect(()=>{
      tl.fromTo(navbar, {opacity : 0, y : -20, transformOrigin : 'top'}, {opacity : 1, y : 0, ease : 'power1', duration : 1})
      
      let showAnim = gsap.from(navbar, { 
          yPercent: -100,
          paused: false,
          duration: 0.5
        }).progress(1);
        
        ScrollTrigger.create({
          start: "0",
          end: 99999,
          onUpdate: (chiaki) => {
            chiaki.direction == -1 ? showAnim.play() : showAnim.reverse();
          },
          animation : gsap.to(navbar, {background : '#e1e0ff', borderColor : '#BA90C6', borderBottomLeftRadius : '32px', borderBottomRightRadius : '32px', boxShadow : '0 0 1px #e1e0ff'}),
          toggleActions : 'restart none none reverse'
        });
  
  },[])

  return (
    <div  className='text-default-black'>
       <div  ref={el=>navbar=el}  className='h-[100px]  border-b-2 z-[2000] fixed w-full top-0 left-0 '>
          <div className='max-w-[1480px] h-full flex justify-between items-center mx-auto '>
                {/* Logo */}
                <p className='text-[24px] font-medium'>GiftLab</p>

                {/* NavItems */}
                <div className='flex gap-16'>
                    {introHomeNavItems.map((navItem, idx) => <NavItem key={idx} {...navItem}/>)}
                </div>

                {/* Login */}
                <div className='flex gap-10 font-medium text-[18px]'>
                    <p>Sign In</p>
                    <p>Sign Up</p>
                </div>
            </div>
       </div>
       
       <div className='flex flex-col'>
        {children}
       </div>

       {/* Footer */}
       <HomeIntroFooter/>


       
    </div>
  )
}

export default HomeIntroNavbarAndFooter