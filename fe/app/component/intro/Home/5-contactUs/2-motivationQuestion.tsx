import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import BlackButtonWithHoverEffect from '../../../common/ButtonWithHoverEffect'

const HomeIntroContactUsMotivation = () => {
  return (
    <div>
        <p className='text-[50px] font-semibold leading-[4.32rem] mb-[40px]'>
          Looking to rocket your startup? Get in touch today!
        </p>
        <div className='flex justify-start mt-16 lex group hover:-translate-y-[6px] duration-[300ms]'>
            <BlackButtonWithHoverEffect btnName='About Us' href='/about'/>
        </div>
    </div>
  )
}

export default HomeIntroContactUsMotivation