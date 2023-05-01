'use client'
import { gsap } from "gsap";
import { Power1 } from "gsap-trial/src/all";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";




export default function Home1stHero({heroPage} : {heroPage :any}) {
  gsap.registerPlugin(ScrollTrigger)

    // make timeline-kun
    const tl = gsap.timeline({defaults : {duration : 0.7, ease : 'power4'}})

    // get elements from DOM-chan
    let firstHero = useRef(null),
        secondHero = useRef(null),
        thirdHero = useRef(null),
        fourthHero = useRef(null),
        fifth = useRef(null),
        ref = useRef(null)

    useEffect(()=>{
      console.log(heroPage)
        tl.fromTo(firstHero, {scale : 0.2, opacity : 0, translateY:25, transformOrigin : 'bottom'}, {rotateZ:0,translateY:0,scale : 1, opacity : 1, duration : 0.6, ease :'power4.easeIn' })
        tl.fromTo(secondHero, {translateX : -50, opacity : 0,  transformOrigin : 'left'}, {translateX : 0, opacity : 1, ease :'power4'}, '<80%')
        tl.fromTo(thirdHero, {translateY:35, opacity:0,  transformOrigin : 'bottom'}, {translateY:0, opacity : 1, duration : 0.8}, '<60%')
        // tl.fromTo(fifth, {opacity:0, translateY:20}, {opacity:1,translateY:0, scrollTrigger : {
        //   trigger: fifth,
        //   markers: true,
        //   start: "top center",
        //   end: "bottom 80px",
        //   scrub: true
        // }},'<45%')
        tl.fromTo(fourthHero, {rotateZ : 5, scale : 0.7, opacity : 0}, {rotateZ : 0, scale : 1, opacity : 1, ease : 'back.out(1.6)', duration : 0.9}, '<45%')

        const element : any = ref.current;
        gsap.fromTo(element.querySelector('#btn'),  {
          opacity: 0,
          y: 10
        },
        {
          opacity: 1,
          y: 0,
          // delay : 0.2,
          duration: 1,
          scrollTrigger: {
            // markers : true,
            trigger: element.querySelector(".heropage"),
            start: "3%",
            end: "20%",
            // scrub: true
          }
        })
    },[])

    // useEffect(()=>{
    //   const element : any = ref.current;
    //   gsap.fromTo(element.querySelector('#btn'),{opacity:0, translateY:20}, {opacity:1,translateY:0,scrollTrigger : {
    //     trigger: element.querySelector('#heropage'),
    //       markers: true,
    //       start: '10%',
    //       end: '15%',
    //       scrub: true
    //   }})
    // },[])



    return (
      <div id="heropage" ref={ref} className="md:pt-[10%] sm:pt-[15%] max-sm:pt-[20%] pb-[10%] container mx-auto p-8">
        <div className="grid lg:grid-cols-2 overflow-hidden ">
          <div className="max-h-[70%] sm:m-auto mt-[5%]">
            {/* 2nd */}
            <div ref={el => secondHero = el} className="relative flex">
              <div className="border-t-[3px] w-[80px] border-black"></div>
              <p className=" absolute -translate-y-[50%] left-[90px] md:text-[18px] md:text-start font-sans font-bold  text-[#121229] sm:text-center sm:text-[16px] max-sm:text-center max-sm:text-[14px] ">
                GIFTLAB
              </p>
            </div>

            {/* 1st */}
            <div ref={el => firstHero = el}>
              <h1 className="md:text-[76px] md:text-start  text-[#121229] font-sans font-bold sm:text-[48px] sm:text-center max-sm:text-[36px] max-sm:text-center mb-2">
                We are a digital marketing agency
              </h1>
            </div>

            {/* 3rd */}
            <div ref={el => thirdHero = el}>
              <p className="md:text-[18px] md:text-start text-[#39394f] font-sans mb-[10%] sm:text-[16px] sm:text-center max-sm:text-[14px] max-sm:text-center ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
                ante velit nunc morbi pretium ut nullam dolor pulvinar proin
                viverra ullamcorper aceget.
              </p>
            </div>
            <div id="btn" ref={el => fifth = el} className="flex justify-start md:space-x-8 sm:space-x-6 mb-[10%] max-sm:space-y-2">
              <button
                type="button"
                className="duration-[300ms] hover:-translate-y-1 rounded-[48px] bg-[#121229] text-[#fff] md:py-[26px] md:pr-[38px] md:pl-[38px] md:text-[18px] hover:bg-[#7371ff] sm:py-[20px] sm:pr-[28px] sm:pl-[28px] max-sm:py-[18px] max-sm:pr-[28px] max-sm:pl-[28px] max-sm:col-span-2 max-sm:m-auto"
              >
                Get in touch &#8594;
              </button>
              <button
                type="button"
                className="duration-[300ms] hover:-translate-y-1  rounded-[48px] text-[#121229] border border-[#121229] md:py-[26px] md:pr-[38px] md:pl-[38px] md:text-[18px] sm:text-[18px] max-sm:text-[16px] hover:border-[#7371ff] hover:bg-[#e1e0ff] hover:text-[#7371ff] sm:py-[20px] sm:pr-[32px] sm:pl-[32px] max-sm:py-[18px] max-sm:pr-[32px] max-sm:pl-[32px] max-sm:col-span-2 max-sm:m-auto"
              >
                Our services
              </button>
            </div>
          </div>
          <div className="md:max-w-3xl sm:max-w-md sm:m-auto">
            <div ref={el => fourthHero = el}>
              <img
                src="https://assets.website-files.com/6316200a92cc0efb7ac10dbc/631677d8c9476c69d0233e23_image-hero-rocket-template.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  