import React from 'react'

const PostsAboutDonationWithDescriptionAndPost = ({post, setClickedPost} : any) => {
  let percentage = post.reached/post.goal*100;

  
  return (
    <div onClick={()=>setClickedPost(post)} className='bg-white p-3 grid grid-cols-3 rounded-[8px] gap-4 cursor-pointer'>
      <div className='col-span-1'>
          <img className='h-[130px] w-[200px] object-cover rounded-[8px]' src={post.image} alt="" />
      </div>

      <div className='col-span-2  flex flex-col justify-between py-2'>
          <div className='flex flex-col'>
            <p className='font-semibold'>{post.title}</p>
            <p className='text-[#615e5a] text-[14px]'>Jewelry</p>
          </div>
          <div>
            <p className='text-[#615e5a] text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia...</p>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='w-[60%] bg-[#e7e8f1] h-[10px] rounded-[20px] overflow-hidden'>
              <div className={`w-[${percentage}%] h-full bg-[#6B6A62] rounded-[20px]`}></div>
            </div>
            <div>
              <p className='text-[10px] '>{percentage}%</p>
            </div>
            <div className='ms-auto'>
              <p className='text-[14px]'>{post.whoPosted}</p>
            </div>

          </div>
        
      </div>
    </div>
  )
}

export default PostsAboutDonationWithDescriptionAndPost