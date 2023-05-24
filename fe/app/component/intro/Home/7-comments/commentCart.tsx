import React from 'react'

const HomeIntroCommentCart = ({bg, profileImg, who, role, comment} : any) => {
  return (
    <div className={`flex gap-12 items-center justify-between `}>
        <div className=' w-[28%] flex flex-col items-center gap-3'>
            <img className='w-[178px] h-[178px]  border-4 border-default-black  rounded-[31413px]' src={profileImg} alt={comment} />
            <div className='text-center'>
                <p className='text-[20px] font-bold'>{who}</p>
                <p className='text-[16px] font-semibold tracking-[0.06rem]'>{role}</p>
            </div>
        </div>
        <div className='w-[70%] flex flex-col gap-[12px]'>
            <p className='text-[24px] font-semibold leading-[2.2rem]'>{comment}</p>
            <p className='text-[18px] text-[#39394f] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis impedit excepturi consequatur tenetur ducimus aliquid aspernatur quo ea beatae?</p>
        </div>
    </div>
  )
}

export default HomeIntroCommentCart