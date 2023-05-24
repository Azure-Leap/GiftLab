import { useRef, useEffect } from "react"
import { gsap, Power3 } from "gsap"

const Checkbox = () => {


    // REF HOOK
    let checkbox : any = useRef(null),
        fillCheckbox : any = useRef(null),
        tickMarkPath : any = useRef(null);

    // timeline gsap
    const tl = gsap.timeline({defaults : {duration : 0.5}})
    


  return (
    <div className="relative flex gap-2 overflow-hidden">
        <div className="relative w-[1rem] h-[1rem] rounded-[3rem] ">
        <span className="absolute bottom-0 left-0 w-full h-full border-[2px] border-[#c5c5c5]"></span>
        <div ref={el => fillCheckbox = el} className="absolute top-[110%] bg-[#6190e8] w-full h-full"></div>
        <input ref={el => checkbox = el} onClick={()=>{
            // PERIMETER OF SVG
            let pathLength = tickMarkPath.getTotalLength()

            // GSAP SET ==> CSS STYLE
            gsap.set(tickMarkPath, {
                strokeDashoffset : 0,
                strokeDasharray : pathLength
            })
            
            if(checkbox.checked){
                tl.to(fillCheckbox, {top : 0});
                tl.fromTo(tickMarkPath, {strokeDashoffset: pathLength}, {strokeDashoffset : 0, opacity : 1}, '<50%');
                tl.to(tickMarkPath, {attr : {stroke : '#fff'}})
                
            } else {
                tl.to(tickMarkPath, {attr : {stroke : 'white'}})
                tl.fromTo(tickMarkPath, {strokeDashoffset: 0}, {strokeDashoffset : pathLength}, '<0%')
                tl.to(fillCheckbox, {top : '100%'})
            }
        }} type="checkbox" className="opacity-0 cursor-pointer z-[1000] absolute bottom-0 left-0 w-full h-full border-[2px] border-[#c5c5c5] "/>
        <svg
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.6] z-[2]"
        >
        <path  ref={el => tickMarkPath = el} className="elastic-line" d="M2 8.5L6.5 13L17.5 2" stroke="white" stroke-width="4" />
        </svg>
        </div>
    </div>
  )
}

export default Checkbox