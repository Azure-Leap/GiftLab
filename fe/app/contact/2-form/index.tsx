'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import HomeIntroContactFormLeftSection from './1-left'
import HomeIntroContactFormSecondAnimation from './2nd-animation'
import HomeIntroContactForm1stAnimation from './1st-animation'
import HomeIntroContact3rdAnimation from './3rd-animation'
import HomeIntroContactForm5thAnimation from './5th-animation'
import HomeIntroContactFormRightSection from './1-right'

const IntroContactForm = () => {

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})

    let firstContactForm : any = useRef(null),
    secondContactForm : any = useRef(null),
    thirdContactForm : any = useRef(null),
    fourthContactForm : any = useRef(null),
    fifthContactForm : any = useRef(null),
    containerRef : any = useRef(null);


useEffect(()=>{


    let hide1st = gsap.to(firstContactForm, {
      opacity : 0,
      scale : .2,
      translateY:25,
      transformOrigin : 'bottom',
      duration : .75,
    }).progress(1);



    ScrollTrigger.create({
      trigger : containerRef,
      start : '-45%',
      end : 9999,
      animation : gsap.to(firstContactForm,  {rotateZ:0,translateY:0,scale : 1, opacity : 1, duration : 0.6, ease :'power4.easeIn' })
    })



    let hide2nd = gsap.to(secondContactForm, {
      opacity : 0,
      translateX : -50,
      transformOrigin : 'left',
      duration : .75,
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-40%',
      end : 9999,
      animation : gsap.to(secondContactForm, {translateX : 0, opacity : 1, ease :'power4'})
    })




    let hide3rd = gsap.to(thirdContactForm, {
      opacity : 0,
      duration : .75,
      transformOrigin : 'bottom',
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-24%',
      end : 9999,
      animation : gsap.to(thirdContactForm, {translateY:0, opacity : 1, duration : 0.8})
    })



    let hide4th = gsap.to(fourthContactForm, {
      opacity : 0,
      duration : .75,
      rotateZ : 5,
       scale : 0.7, 
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-22%',
      end : 9999,
      animation : gsap.to(fourthContactForm, {rotateZ : 0, scale : 1, opacity : 1, ease : 'back.out(1.6)', duration : 0.9})
    })

        //   ContactForm 2 btns
    let showBtns = gsap.to(fifthContactForm, {
      opacity : 0,
      duration : .75,
      y : 20
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-10%',
      end : 9999,
      animation : gsap.to(fifthContactForm, {opacity : 1, y:0, duration : 0.75})
    })
},[])


  return (
    <div className='h-[100vh] my-[92px]'>
    <div className='max-w-[1360px] mx-auto h-[100vh]'>
        <div ref={el=>containerRef=el} className='grid content-center  grid-cols-9 gap-16 w-full  p-[200px_0_120px_0] '>

          <div ref={el=>fourthContactForm=el} className='relative col-span-5'>
              <HomeIntroContactFormRightSection/>
          </div>

            <div className='col-span-4 grid content-center'>
                <HomeIntroContactFormLeftSection>
            
                    <div ref={el=>secondContactForm=el}>
                        <HomeIntroContactFormSecondAnimation/>
                    </div>

                    <div ref={el=>firstContactForm=el}>
                        <HomeIntroContactForm1stAnimation/>
                    </div>

                    <div ref={el=>thirdContactForm=el}>
                        <HomeIntroContact3rdAnimation/>
                    </div>

                    <div className='flex gap-10 items-center' ref={el=>fifthContactForm=el}>
                        <HomeIntroContactForm5thAnimation/>
                    </div>

                </HomeIntroContactFormLeftSection>
            </div>


        </div>
    </div>
</div>
  )
}

export default IntroContactForm