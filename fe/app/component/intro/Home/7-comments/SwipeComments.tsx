import { commentsData } from '@/data/intro-home/comments'
import { commentSliderConfig } from '@/utils/home-intro-slide-config'
import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import { SliderBtn } from '../3-serviceSection/Btn-prev-next'
import HomeIntroCommentCart from './commentCart'

const HomeIntroSwipeComments = () => {
  return (
    <div>
        <Swiper {...commentSliderConfig} style ={{maxWidth : '1360px', margin : '0 auto', overflow  :'visible', display : 'flex', flexDirection : 'column', alignItems : 'center', gap : '50px'}}>
            <div>
                {
                    commentsData.map((commentSlide, idx) => (
                        <SwiperSlide key={idx} style={{background : commentSlide.bg, borderRadius : '40px', padding : '82px 60px', width : '60vw'}}>
                            <HomeIntroCommentCart {...commentSlide}/>
                        </SwiperSlide>
                    ) )
                }
            </div>
            <div>
                <SliderBtn/>
            </div>
        </Swiper>
    </div>
  )
}

export default HomeIntroSwipeComments