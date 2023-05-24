import { servicesData } from '@/data/intro-home/service'
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import ServiceCard from './serviceCard'

const HomeIntroServicesSlides = () => {

  // For Hover effect
  const [swiperStyle, setSwiperStyle] = useState(-1)

  return (
    <>
      {servicesData.map((service,index)=>(
            <SwiperSlide onMouseEnter={()=>setSwiperStyle(index)} onMouseLeave={()=>setSwiperStyle(-1)} key={index} style={{background:service.bg, transition : 'all 0.3s', borderRadius : '30px', translate : swiperStyle == index ? '0 -10px' : '0 0'}}>
                <ServiceCard title={service.title} mainImg={service.mainImg} index ={index} swiperStyle ={swiperStyle}/>
            </SwiperSlide>
      ))}
    </>
  )
}

export default HomeIntroServicesSlides