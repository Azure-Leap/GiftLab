import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { useSwiper } from "swiper/react"

export const SliderBtn = () => {
    const swiper = useSwiper()
    return (
            <>
                <div className='flex justify-end items-end text-white text-[28px] gap-5 font-bold '>
                    <button onClick={()=>swiper.slidePrev()} className='w-16 h-16 rounded-full bg-default-black flex justify-center items-center hover:scale-[0.95] hover:bg-intro-home-btn duration-[300ms] group'><span className='group-hover:-translate-x-1 duration-[300ms]'><AiOutlineArrowLeft/></span></button>
                    <button onClick={()=>swiper.slideNext()} className='w-16 h-16 rounded-full bg-default-black flex justify-center items-center hover:scale-[0.95] hover:bg-intro-home-btn duration-[300ms] group'><span className='group-hover:translate-x-1 duration-[300ms]'><AiOutlineArrowRight/></span></button>
                </div> 
            </>
        )
}

export const SliderBtnFilter = () => {
    const swiper = useSwiper()
    return (
        <>
            <div className="flex">
                <button onClick={()=>swiper.slidePrev()} className='p-[6px_8px] min-h-[24px] min-w-[24px] rounded-[200px] bg-transparent flex justify-center items-center hover:scale-[0.95] hover:bg-intro-home-btn duration-[300ms]'><BsChevronLeft size={12}/></button>
                <button onClick={()=>swiper.slideNext()} className='p-[6px_8px] min-h-[24px] min-w-[24px] rounded-[200px] bg-transparent flex justify-center items-center hover:scale-[0.95] hover:bg-intro-home-btn duration-[300ms]'><BsChevronRight size={12}/></button>
            </div>
        </>
    )
}
