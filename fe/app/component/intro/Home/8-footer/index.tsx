import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import BlackButtonWithHoverEffect from '../../../common/ButtonWithHoverEffect'
import FooterAboutUsInformation from './footer-aboutus'
import GiftLabSocialLinks from '../../../common/OurLinks'


const HomeIntroFooter = () => {
  gsap.registerPlugin(ScrollTrigger)
  
  let containerFooter : any = useRef(null),
      showUpContainer : any = useRef(null),
      grandFather : any = useRef(null);

  useEffect(()=>{

    let hideGrandFather = gsap.to(grandFather, {opacity : 0, scale : 0.7}).progress(1);
    ScrollTrigger.create({
      // trigger : containerFooter,
      start : '-200%',
      animation : gsap.to(grandFather, {opacity : 1, scale: 1, ease : 'Back.easeOut(1.5)'})
    })

    let hideFooter = gsap.to(containerFooter, {opacity : 0, scale : 0.7}).progress(1);
    ScrollTrigger.create({
      trigger : containerFooter,
      start : '-230%',
      animation : gsap.to(containerFooter, {opacity : 1, duration : 0.7, scale : 1, ease : 'Back.easeOut(2)'})
    })

    let hideContainerShowUpAfterBla = gsap.to(showUpContainer, {opacity : 0, scale : 0.7}).progress(1);
    ScrollTrigger.create({
      trigger : containerFooter,
      start : '-220%',
      animation : gsap.to(showUpContainer, {opacity : 1, scale : 1, duration : 0.7, ease : 'Back.easeOut(2)'})
    })

  })




  return (
    <div ref={el=>grandFather=el} className='bg-default-black text-white mt-[350px]'>
        {/* Container */}
        <div ref={el=>containerFooter=el} className='max-w-[1380px] mx-auto p-[100px_0] flex flex-col gap-16'>

          {/* Attractive */}
            <div className='bg-[#c3edff] text-default-black p-[124px_90px] text-[44px] mt-[-285px] font-semibold rounded-[40px] flex justify-between items-center' ref={el=>showUpContainer=el}>
                <p>Ready to grow your company? <br /> Get in touch today!</p>
                <BlackButtonWithHoverEffect btnName='Sign Up!' href='/signup'/>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <FooterAboutUsInformation/>
                <GiftLabSocialLinks bgColor='bg-white' textColor='text-default-black'/>
            </div>
        </div>
    </div>
  )
}

export default HomeIntroFooter