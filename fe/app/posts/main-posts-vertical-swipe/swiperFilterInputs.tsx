import FilterCategory from '@/app/component/filter/filter-category'
import FilterPopularity from '@/app/component/filter/filter-popularity'
import FilterProvince from '@/app/component/filter/filter-province'
import FilterType from '@/app/component/filter/filter-type'
import { SwiperFilterInputsConfig } from '@/utils/home-intro-slide-config'
import React from 'react'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { SliderBtn, SliderBtnFilter } from '@/app/component/intro/Home/3-serviceSection/Btn-prev-next'


const SwiperFilterInputs = () => {
  return (
    
        <Swiper 
            // navigation={true}
            effect="fade"
            // speed={1500}
            // // autoplay={{delay: 5500}}
            // pagination={{
            // clickable: true,
            // }}
            // loop={true}
            {...SwiperFilterInputsConfig} style={{ overflow :'visible', zIndex:'10', position : 'relative', display : 'flex', alignItems : 'center', gap:'10px', maxWidth : '240px', margin : '0 auto', transition : '3s'}}>
          {filterInputsData.map((input, idx) => (
              <SwiperSlide key={idx} style={{width : '230px'}}>
                  {input}
              </SwiperSlide>
          ))}
          <div className=' top-[6px] -right-[80px]'>
            <SliderBtnFilter/>
          </div>
      </Swiper>
    
  )
}


// FILTER NI BOSS BEK BEK!!
const filterInputsData = [ <FilterCategory key={1}/>, <FilterProvince key={2}/>, <FilterType key={3}/>, <FilterPopularity key={4}/>]


// CONFIG SWIPER


export default SwiperFilterInputs