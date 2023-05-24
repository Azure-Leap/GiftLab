import React, { useRef, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useCartStore } from '@/context/store';
import { usePosts } from '@/context/posts';
import { FiSearch } from 'react-icons/fi';
import { BsChevronUp } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { TiStarFullOutline } from 'react-icons/ti';
import { AddToCartBtn } from '../addToCart.tsx';
import { CgChevronDown } from 'react-icons/cg';
import { SiContactlesspayment } from 'react-icons/si';
import FilterBodySection from '@/app/component/filter/filter-body';

const HorizontalSwipePostPage = () => {


  const cartStore = useCartStore(),
  {filteredPosts, setFilteredPosts, setPageWithDescription, clickedPost, setClickedPost} = usePosts();

  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false)
  let searchInput : any = useRef();

  // CHEVRON DOWN
  const [isChevronDownBtnClicked, setIsChevronDownBtnClicked] = useState(false)


  const [hideFilterInputs, setHideFilterInputs] = useState(true)

  function setPosts(e : any){

      let searchInputValue = e.target.value.toLowerCase(),
          filteredPosts1 = filteredPosts.filter((post) => post.title.toLowerCase().indexOf(searchInputValue!) == 0);

      !searchInputValue ? setFilteredPosts(posts) : setFilteredPosts(filteredPosts1)
  }


return (
      <div className='col-span-3 row-span-6'>
        <div className='h-[93vh] w-full'>
          {/* Body */}
          <div className='grid grid-cols-3 gap-4 '>
              {/* left */}
                <div className='col-span-2 '>
                  <div>
                  <motion.div layout className={` bg-white w-full rounded-[10px] overflow-auto  shadow-[10px_20px_15px_rgba(0,0,0,0.2)] relative`}>
                      <div className='flex w-full'>
                        <div className='w-[40%] flex'>
                          {/* {isChevronDownBtnClicked && (
                                    <div className='w-[25%] h-full p-2 flex flex-col gap-4'>
                                          <div className='h-[20%] w-full'>
                                            <img className='object-cover w-full h-full' src="https://i.pinimg.com/474x/57/28/b9/5728b94863e72cc4d7962a52de19b1f3.jpg" alt="" />
                                          </div>
                                          <div className='h-[20%] w-full'>
                                            <img className='object-cover w-full h-full' src="https://i.pinimg.com/474x/57/28/b9/5728b94863e72cc4d7962a52de19b1f3.jpg" alt="" />
                                          </div>
                                    </div>
                          )} */}
                          <div  className={` h-[400px] w-[100%] p-4 rounded-[20px]  `}>
                              <img className='w-full h-full object-cover rounded-[20px]' src="https://i.pinimg.com/474x/4d/c1/cc/4dc1cccece7604275b716cb68b084a8e.jpg" alt="" />
                          </div>
                    </div>

                    {/* Some details */}
                    <div className='p-[24px_16px] flex flex-col gap-4 w-[60%]'>
                        
                        {/* Title */}
                        <div className='text-[18px] font-semibold tracking-[0.04rem]'>
                          <p>Raven Top With <br />Colored Leaves Design</p>
                        </div>
                        
                        {/* Stars and Comments */}
                        <div className='flex gap-10 items-center '>
                            <div className='flex gap-1 items-center'>
                                {[1,1,1,1,1].map((star, idx) => <TiStarFullOutline key={idx} color='#FFD95A' size={20}/>)}
                                <p className='text-[14px] ms-2'>4.5</p>
                            </div>
                            {/* Comments */}
                            <div className='flex items-center gap-2 text-[#B7B7B7]'>
                              <span><FaRegCommentDots /></span>
                              <p className='text-[14px]'>120 comments</p>
                            </div>
                        </div>

                        {/* Sizes */}
                        <div className='gap-4 flex flex-col'>
                          <p className='text-[14px] font-semibold tracking-[0.04rem]'>Select Size</p>
                          <div className='flex justify-start gap-4'>
                            <div className='p-[6px] rounded-[10px] border-[1px] w-[35px] h-[35px] flex justify-center items-center'>
                                <p className='text-[12px] font-semibold'>XS</p>
                            </div>
                            <div className='p-[6px] rounded-[10px] border-[1px] w-[35px] h-[35px] flex justify-center items-center'>
                                <p className='text-[12px] font-semibold'>S</p>
                            </div>
                            <div className='p-[6px] rounded-[10px] border-[1px] w-[35px] h-[35px] flex justify-center items-center'>
                                <p className='text-[12px] font-semibold'>M</p>
                            </div>
                            <div className='p-[6px] rounded-[10px] border-[1px] w-[35px] h-[35px] flex justify-center items-center'>
                                <p className='text-[12px] font-semibold'>L</p>
                            </div>
                            <div className='p-[6px] rounded-[10px] border-[1px] w-[35px] h-[35px] flex justify-center items-center'>
                                <p className='text-[12px] font-semibold'>XL</p>
                            </div>
                          </div>
                        </div>

                        {/* Colors */}
                        <div className='gap-4 flex flex-col'>
                          <p className='text-[14px] font-semibold tracking-[0.04rem]'>Colours Available</p>
                          <div className='flex gap-4'>
                            <div className='col-span-1 bg-[#000] w-[20px] h-[20px] rounded-[123px] outline outline-[#000] hover:outline-offset-[3px] duration-300 cursor-pointer '></div>
                            <div className='col-span-1 bg-[#FFE194] w-[20px] h-[20px] rounded-[123px] outline outline-[#FFE194] hover:outline-offset-[3px] duration-300 cursor-pointer '></div>
                            <div className='col-span-1 bg-[#F266AB] w-[20px] h-[20px] rounded-[123px] outline outline-[#F266AB] hover:outline-offset-[3px] duration-300 cursor-pointer '></div>
                            <div className='col-span-1 bg-[#643843] w-[20px] h-[20px] rounded-[123px] outline outline-[#643843] hover:outline-offset-[3px] duration-300 cursor-pointer '></div>
                          </div>
                        </div>

                        <div className='flex gap-3 items-center mt-4'>
                          {/*  */}
                          <div>
                              <AddToCartBtn padX ='p-[10px_60px]' bg='bg-[#00ad97]  ' outlineColor='outline-[#00ad97]'/>
                          </div>
                          <div className='border-2 border-[#009393] p-[8px_24px] rounded-[20px]'>
                              <p className='text-[#009393]'>$65.00</p>
                          </div>
                        </div>

                      </div>
                  </div>
                  <div onClick={()=>setIsChevronDownBtnClicked(!isChevronDownBtnClicked)} className='absolute bottom-0 right-[0] p-1 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] cursor-pointer'>
                        <div className=' p-4 rounded-full bg-[#DBDFEA] shadow-[inset_0_0_10px_rgba(255,255,255,0.8)]'>
                              <CgChevronDown size={19}/>
                        </div>
                  </div>
                  <AnimatePresence>
                    {isChevronDownBtnClicked && (
                      <motion.div initial={{height:0}} animate={{height : 'auto'}} exit={{height : 0}} transition={{duration:0.3}} className='w-full p-4 flex' >
{/* 
                          <div className='w-[40%]'>
                              <div className='flex items-center'>
                                <span><SiContactlesspayment size={32}/></span>
                                <p>Secure Payment</p>
                              </div>
                          </div> */}
                          {/* <div className='w-[60%] flex flex-col gap-2 '>
                            <div className=' flex items-center rounded-[4px] relative'>
                              <div className='w-[8px] h-[100%] bg-[#FF6969] absolute inset-1 top-0 rounded-[20px] left-0'></div>
                              <p className='ms-[1rem]'>Product Description</p>
                            </div>
                            <div>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vitae asperiores odio alias numquam nobis delectus minus sunt. Facere, voluptatibus?</p>
                            </div>
                          </div> */}
                          <p>aas</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  </motion.div>

                  {/* <AnimatePresence>
                    {isClicked && (
                      
                    )}
                  </AnimatePresence> */}

                </div>
                
                {/* Posts */}
                {/* <div className='mt-[40px] flex flex-row gap-4  w-[50vw] overflow-x-scroll'>
                        {[1,1,1,1,1,1,1].map(post => (
                                              <div className='w-[250px] h-[320px] bg-black rounded-[20px]'>
                                                  a
                                              </div>
                        ))}
                </div> */}
              </div>

              {/* RIGHT */}
              <div className='flex flex-col gap-2 items-start '>
                    <div className='flex gap-2 items-start'>
                                         {/* SEARCH */}
                  <div className='flex items-center gap-1 bg-white rounded-[20px] p-[6px_8px]'>
                    <span><FiSearch/></span>
                    <input className='bg-transparent p-1 outline-none' type="text" placeholder='Search...' />
                  </div>

                {/* Switcher */}
                <motion.div layout 
                            onClick={()=>{
                                setPageWithDescription(true)
                            }}
                            className='p-[6px_8px] min-h-[36px] min-w-[36px]  rounded-[200px] bg-transparent flex justify-center items-center hover:scale-[0.95] hover:bg-intro-home-btn duration-[300ms] z-50'>
                            <span><BsChevronUp size={12}/></span>
                  </motion.div>

                {/* Store */}
                <motion.div layout onClick={()=>cartStore.toggleCart()} className='z-[100] relative flex gap-1 justify-center items-center bg-white p-[6px_8px] min-h-[36px] min-w-[36px] rounded-[200px] cursor-pointer'>
                            <span><BiBell size={19}/></span>
                            {cartStore.cart.length > 0 && (
                                <motion.span  
                                    initial = {{scale:0}}
                                    animate ={{scale:1}}
                            
                                    className="bg-[linear-gradient(240deg,#FF6969,#FF6969,#FF6969)] text-home-page text-sm font-bold w-4 h-4 rounded-[20px] absolute left-[18px] bottom-5 flex items-center justify-center">
                                    <motion.p key={cartStore.cart.length} initial={{scale : 0, opacity : 0}} animate={{scale:1, opacity:1}} exit={{scale:0, opacity:0}}  className='text-[11.5px]'>{cartStore.cart.length}</motion.p>
                                </motion.span>)}
                </motion.div> 

                {/* Profile Pic */}
                <motion.div layout  className='z-[100] relative flex gap-1 justify-center items-center bg-white  min-h-[36px] min-w-[36px] rounded-[200px] cursor-pointer'>
                      <img className='object-fill h-[36px]  w-[36px] rounded-[200px]' src="https://i.pinimg.com/474x/37/57/1a/37571a792147cbe848d14e7b8843c493.jpg" alt="" />
                </motion.div>
                    </div>
                    <div className='w-full'>
                      <FilterBodySection/>
                    </div>
                </div>
          </div>
        </div>
      </div>
)
}

export default HorizontalSwipePostPage