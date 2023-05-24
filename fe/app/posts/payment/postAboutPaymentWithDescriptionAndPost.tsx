  import React, { useRef, useState } from 'react'
  import { FaChevronDown } from 'react-icons/fa'
  import { HiOutlineSparkles } from 'react-icons/hi'
import { AddToCartBtn } from '../addToCart.tsx'
import gsap from 'gsap'

  const DescriptionPostAboutPaymentWithDescriptionAndPosts = ({clickedPost} : any) => {

    let chevronIcon : any = useRef();
    const [isTop, setIsTop] = useState(true)

    function rotate180Deg (){
      gsap.to(chevronIcon, {rotateZ : isTop ? 180 : 0})
      setIsTop(!isTop)
      
    }
    // const handleClickScroll = (whereUGo : string) => {
    //   const element = document.getElementById(whereUGo);
    //   if (element) {
    //     element.scrollIntoView({ behavior: 'smooth' });
        
    //   }
    // };
    const handleClickScroll = (whereUGo : string) => {
      const element = document.getElementById('top');
      if (element && isTop)  element.scrollTo({ behavior: 'smooth', top : document.documentElement.scrollHeight });
      else {
        element!.scrollTo({ behavior: 'smooth', top : 0 });
      }
       
      
    }



    return (
      // row-span-6 bsn ustgav
      <div className='col-span-3 rounded-[32px]  flex flex-col gap-5 h-[93vh] overflow-y-scroll relative ' id='top' > 
        {/* Top */}
          <div className='grid grid-cols-2 gap-10 bg-white p-[1.5rem_2rem_2rem_2rem] rounded-[32px]'  id='mainContent'>
              {/* Right */}
              <div className='col-span-1  gap-10 content-center grid'>
                
                <div className='flex flex-col gap-3'>
                  <p className='text-[24px] font-semibold'>{clickedPost.title}</p>
                  <p className='text-[#39394f]'>{clickedPost.description}</p>
                </div>

                {/* carousel */}
                <div className='grid grid-cols-4 gap-4'>
                  {clickedPost.carouselImg.map((img:any, imgIdx:number) => (
                              <div key={imgIdx} className={`rounded-[20px] overflow-hidden border-2 border-black` }>
                                  <img src={img}  />
                              </div>            
                  ))}
                </div>
              </div>

              {/* Left ===> Carousel Item */}
              <div style={{boxShadow: '1px 2px 9px #F4AAB9'}} className='col-span-1 rounded-[234px] p-1  overflow-hidden'>
                  <img style={{boxShadow : '1px 2px 9px #000'}} className='rounded-[1312px]' src={clickedPost.carouselImg[0]} alt="" />
              </div>
          </div>

          {/* Bot */}
          <div  className='grid grid-cols-2  rounded-[32px] gap-5'>
              <div className='col-span-1 p-5 bg-white rounded-[32px] flex flex-col gap-4  '>

                  {/* Price */}
                  <div className='flex gap-1 items-center'>
                    <p className='font-semibold text-[14px]'>Price :</p>
                    <p className='font-semibold'>{clickedPost.price}</p>
                  </div>
                  {/* Rate */}
                  <div>
                      <p className='font-semibold text-[14px]'>Review:</p>
                      {/* Rate icons */}
                  </div>

                  {/* Color */}
                  <div className='flex gap-3 items-center'>
                    <p className='font-semibold text-[14px]'>Color:</p>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-1 bg-[#FF6D60] w-[20px] h-[20px] rounded-[123px]'></div>
                        <div className='col-span-1 bg-[#F7D060] w-[20px] h-[20px] rounded-[123px]'></div>
                        <div className='col-span-1 bg-[#F3E99F] w-[20px] h-[20px] rounded-[123px]'></div>
                        <div className='col-span-1 bg-[#98D8AA] w-[20px] h-[20px] rounded-[123px]'></div>
                    </div>
                  </div>

                  {/* Size */}
                  <div className='flex gap-3'>
                    <p className='font-semibold text-[14px]'>Size:</p>
                    <div className='grid grid-cols-4 gap-4'>
                      {[1,1,1,1,1,1,1,1].map((size, idx)=> <div key={idx} className=' p-[5px_20px] bg-[#e7e8f0] flex items-center justify-center rounded-[9px] text-[14px]'><p>44</p></div>)}
                    </div>
                  </div>

                  {/* Add to cart btn */}

                    <AddToCartBtn outlineColor='outline-[#000]'   bg='bg-[#000]' padX='p-[10px_30px]' clickedPost={clickedPost}/>
              </div>

              <div className='bg-white rounded-[32px] p-[2rem]'>
                  <p className='text-[18px] font-semibold mb-3'>集まった金ですること</p>
                  <div className='flex flex-col gap-2'> 
                      {clickedPost.goals.map((goal:any, idx:number) => (
                                      <div key={idx} className='flex items-center ms-1 gap-1'>
                                        <span><HiOutlineSparkles size={16} color='#FFD95A'/></span>
                                        <p className='text-[1rem] font-medium'>{goal.title}</p>
                                      </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Scroll down */}
          
            <div  onClick={()=>{
              rotate180Deg()
              isTop ? handleClickScroll('description') : handleClickScroll('mainContent')
            }} className=' cursor-pointer flex justify-center rounded-[312px] overflow-hidden bg-white mx-auto border-2 border-black  absolute bottom-9 left-[50%] -translate-x-[50%] p-[10px]'>
                <span ref={el => chevronIcon.current = el}><FaChevronDown/></span>
            </div>
          

          {/* Description 詳しいところ */}
          <div id='description'  className='h-[100vh] bg-white mt-16 rounded-[32px]' >

              {/* What company */}
              <div className='border-b-2 border-black  p-[1rem_2rem_1rem_2rem] flex justify-between items-center'>
                  {/* Company/UserRequested Logo and Info */}
                  <div className='flex gap-1 items-center'>
                      {/* Logo */}
                      <div>
                        <img className='w-[60px] h-[60px]' src="/logo/GiftLabLogoLight.png" alt="" />
                      </div>
                      <div className='flex flex-col'>
                        <div>
                            <p className='text-[1rem] text-[#39394f] font-bold'>{clickedPost.whoPosted}</p>
                        </div>

                        {/* Name */}
                        <div>
                          <p className='text-[18px] text-default-black font-bold'>{clickedPost.title}</p>
                        </div>
                      </div>
                  </div>

                  {/* Posted Date */}
                  <div>
                      <p className='text-[14px] font-bold'>2023/01/05</p>
                  </div>
              </div>

              {/* Content */}
              <div className=' p-[1.5rem_2rem_2rem_2rem]'>
                  <p className='text-[18px] leading-[3rem] tracking-[0.06rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur harum optio voluptates perspiciatis veniam deleniti odio maiores, quas et debitis dolores ullam eligendi obcaecati tempora natus, quae molestias illo possimus modi, sit magnam corporis eveniet tenetur. Sint, neque. Ad, eos tenetur. Ullam qui, officiis repellat culpa, minima facere at corrupti placeat veniam aliquid quod sint dolor dignissimos nobis laborum blanditiis doloremque neque mollitia accusamus reiciendis sit. Obcaecati, nobis atque distinctio sed molestiae ipsam unde nisi cupiditate expedita velit voluptatem earum magni, officiis debitis. Cumque voluptate ea magnam debitis voluptatem! Error dignissimos magni quis. Ea dolores optio, facere enim doloribus sequi.</p>
              </div>
          </div>
      </div>
    )
  }

  export default DescriptionPostAboutPaymentWithDescriptionAndPosts