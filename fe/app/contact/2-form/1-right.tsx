import BlackButtonWithHoverEffect from '@/app/component/common/ButtonWithHoverEffect'
import React from 'react'

const HomeIntroContactFormRightSection = () => {
  return (
    <div className='p-[69px_51px] bg-[#c3edff] rounded-[50px] flex flex-col gap-10'>
        <div className='grid grid-cols-2 gap-10'>
            <div className='col-span-1 flex flex-col gap-1'>
                <p className='font-bold text-[18px]'>Enter name</p>
                <input className='min-h-[68px] hover:border-intro-home-btn-hovered duration-[300ms] text-[16px] p-[8px_24px] rounded-[100px] border-2 border-default-black outline-intro-home-btn-hovered' type="text" placeholder="What's your name?" />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
                <p className='font-bold text-[18px]'>Enter name</p>
                <input className='min-h-[68px] hover:border-intro-home-btn-hovered duration-[300ms] text-[16px] p-[8px_24px] rounded-[100px] border-2 border-default-black outline-intro-home-btn-hovered' type="text" placeholder="What's your name?" />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
                <p className='font-bold text-[18px]'>Enter name</p>
                <input className='min-h-[68px] hover:border-intro-home-btn-hovered duration-[300ms] text-[16px] p-[8px_24px] rounded-[100px] border-2 border-default-black outline-intro-home-btn-hovered' type="text" placeholder="What's your name?" />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
                <p className='font-bold text-[18px]'>Enter name</p>
                <input className='min-h-[68px] hover:border-intro-home-btn-hovered duration-[300ms] text-[16px] p-[8px_24px] rounded-[100px] border-2 border-default-black outline-intro-home-btn-hovered' type="text" placeholder="What's your name?" />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
                <p className='font-bold text-[18px]'>Describe your project</p>
                <textarea className='min-h-[144px] hover:border-intro-home-btn-hovered duration-[300ms] text-[16px] p-[24px] rounded-[30px] border-2 border-default-black outline-intro-home-btn-hovered' placeholder="What's your name?" />
            </div>
        </div>
        <div>
          <BlackButtonWithHoverEffect btnName='Send a message' href='/contact'/>
        </div>
    </div>
  )
}

export default HomeIntroContactFormRightSection