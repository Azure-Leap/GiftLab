import React from 'react'
import { BsPeople } from 'react-icons/bs'

const PostsAboutEventWithDescriptionAndPost = ({post, setClickedPost} : any) => {
  return (
    <div onClick={()=>setClickedPost(post)} className='bg-white p-3 grid grid-cols-3 rounded-[8px] gap-4 cursor-pointer'>
        <div className='col-span-1'>
            <img className='h-[130px] w-[200px] object-cover rounded-[8px]' src={post.image} alt="" />
        </div>

        <div className='col-span-2  flex flex-col justify-between py-2'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>{post.title}</p>
              <p className='text-[#615e5a] text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia fugit, voluptatem error recusan...</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-1'>
                <p className='text-[14px]'>{post.members} / {post.limit}</p>
                <span> <BsPeople/></span>
              </div>
              <div>
                <p className='text-[14px]'>{post.whoPosted}</p>
              </div>

            </div>
          
        </div>
    </div>
  )
}

export default PostsAboutEventWithDescriptionAndPost