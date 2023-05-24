import { useRef, useEffect } from "react"
import { gsap, Power3 } from "gsap"
import {SignUpInputType} from '../../types/LoginFormInputsType'
import { useLoginForm } from "@/context/loginform"

const Input = ({inputs, input } : SignUpInputType ) => {
    const {innerContent, name, type } = inputs
    const loginFormStates = useLoginForm();

    
    let elasticLine:any = useRef(null)
    let placeholder:any = useRef(null)
    // let input:any = useRef(1)

    const tl = gsap.timeline({defaults : {duration: 1}});

    const start = 
    "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";

    const end = 
    "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

    // console.log(inputContainer)
    


  return (
    <div className="relative">
        <div ref={el => placeholder = el} className="relative z-1 pointer-events-none p-[0.3rem] text-[0.6rem] opacity-[0.6] origin-left">{innerContent}</div>
        <input 
        ref={el => input = el}
        onInput = {(e) => {
  
            if(!input.value){
              console.log(input,'aaa')
                gsap.to(placeholder, {top:0,left:0,scale:1,duration:0.5,ease:'Power2.easeOut'})
            }
            if(input.value){
              if(!e.currentTarget.value){
                tl.fromTo(elasticLine, {attr : {d:start}}, {attr:{d:end}, ease : 'Power2.easeOut', duration : 0.75})
            }
            // inputContainer.currentTarget.onClick(()=>{
            //   if(!e.currentTarget.value){
            //     tl.fromTo(elasticLine, {attr : {d:start}}, {attr:{d:end}, ease : 'Power2.easeOut', duration : 0.75})
            // }
            // })
            tl.to(elasticLine, {attr : {d:start}, ease : 'elastic.out(3,0.5)', duration : 0.1});
            tl.to(placeholder, {top : -15, left : 0, scale : 0.7, duration : 0.4  , ease : 'Power2.easeOut'})
            }
        }}
        
        onClick={(e)=>{
            if(!e.currentTarget.value){
             tl.fromTo(elasticLine, {attr : {d:start}}, {attr:{d:end}, ease : 'Power2.easeOut', duration : 0.75})
         }
         tl.to(elasticLine, {attr : {d:start}, ease : 'elastic.out(3,0.5)'}, '<50%');
         tl.to(placeholder, {top : -15, left : 0, scale : 0.7, duration : 0.5, ease : 'Power2.easeOut'}, '<15%')
  


        }}
        type={type} name={name} autoComplete="off" className="input-name w-full h-full absolute top-0 border-none outline-none text-[0.7rem] bg-transparent p-[0.3rem]"/>
        {/* <!-- SVG LINE --> */}
        <svg className="line-svg overflow-visible" width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  ref={el => elasticLine = el} className="elastic-line" d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512" stroke="#D1D4DA" stroke-width="2"/>
        </svg>
        
    </div>
    
  )
}

export default Input


