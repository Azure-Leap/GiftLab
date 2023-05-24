'use client'
import React, { useRef, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'

// import PostCanSeeDescriptionInSamePage from './post-canSeeDescriptionInSamePage'
import Navbar from '@/app/component/layout/Navbar'

import { posts } from '@/data/home/posts'
import PostsAboutEvent from '../eventss/postsEventWithDescriptionAndPost'
import PostsAboutPaymentWithDescriptionAndPost from '../payment/postsAboutPaymentWithDescriptionAndPost'
import PostsAboutDonationWithDescriptionAndPost from '../donation/postsAboutDonationWithDescriptionAndPost'

import DescriptionPostAboutPaymentWithDescriptionAndPosts from '../payment/postAboutPaymentWithDescriptionAndPost'
import PostEventWithDescriptionAndPost from '../eventss/postEventWithDescriptionAndPost'
import PostAboutDonationWithDescriptionAndPost from '../donation/postAboutDonationWithDescriptionAndPost'
import { useCartStore } from '@/context/store'
import FilterCategory from '@/app/component/filter/filter-category'
import { usePosts } from '@/context/posts'
import FilterProvince from '@/app/component/filter/filter-province'
import FilterType from '@/app/component/filter/filter-type'
import FilterPopularity from '@/app/component/filter/filter-popularity'
import SwiperFilterInputs from './swiperFilterInputs'
import { MdOutlineSwipeVertical } from 'react-icons/md'
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs'












const MainPostsOfPageWithDescriptionAndPosts = () => {

    const cartStore = useCartStore(),
          {filteredPosts, setFilteredPosts, setPageWithDescription, clickedPost, setClickedPost} = usePosts();


    // Client can see description page if client clicked on the post
    // const [clickedPost, setClickedPost] = useState(posts[0]);

    // ->
    const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false)
    let searchInput : any = useRef();

    // Search
    // const [searchInputValue, setSearchInputValue] = useState()
    // const [filteredPosts, setFilteredPosts] = useState(posts);
    const [hideFilterInputs, setHideFilterInputs] = useState(true)

    // FUNCTIONS


    function setPosts(e : any){

        let searchInputValue = e.target.value.toLowerCase(),
            filteredPosts1 = filteredPosts.filter((post) => post.title.toLowerCase().indexOf(searchInputValue!) == 0);

        !searchInputValue ? setFilteredPosts(posts) : setFilteredPosts(filteredPosts1)
    }


    
  return (
    // <Navbar>
        <div
            onClick={()=>{
                // console.log(inputSearch.current.value)
                if(isSearchBtnClicked && !searchInput.current.value ) {
                    setIsSearchBtnClicked(false) 
                    setHideFilterInputs(true)
                }
            }} 
            className='col-span-3 grid grid-cols-5 row-span-6 max-h-[90vh] gap-10'>

            {/* Left */}
            <motion.div layout className='col-span-2 p-[1rem_0] h-[95vh] flex flex-col gap-2  overflow-y-scroll'>

                {/* Filter */}
                <div className='flex justify-between bg-transparent items-center mb-4'>
                {/* Filter  */}
                    <div className='flex gap-5 items-center'>    
                        {/* <FilterCategory/> */}
                        {hideFilterInputs && <SwiperFilterInputs/>}
                    </div>
                   <div className='z-[1000] bg-transparent'>
                    <div className='flex gap-4 justify-end z-[100] bg-transparent'>

                                                {/* HENKOU */}
                        <motion.div layout 
                            onClick={()=>{
                                setPageWithDescription(false)
                            }}
                            className='p-[6px_8px] min-h-[36px] min-w-[36px]  rounded-[200px] bg-transparent flex justify-center items-center hover:scale-[0.95] hover:bg-intro-home-btn duration-[300ms] z-50'>
                            <span><BsChevronDown size={12}/></span>
                        </motion.div>

                        <motion.div layout onClick={(e)=>{
                                e.stopPropagation();
                                setHideFilterInputs(false)
                                setIsSearchBtnClicked(true)

                            }} className='flex gap-1 justify-center items-center bg-white p-[6px_8px] min-h-[36px] min-w-[36px] rounded-[200px] cursor-pointer'>
                                <motion.span layout><FiSearch/></motion.span>
                                {/* <AnimatePresence>{!isSearchBtnClicked && <motion.input layout initial={{width:0}} animate={{width :'200px'}} exit={{width:0}} className='bg-transparent outline-none' type="text" />}</AnimatePresence> */}
                                <AnimatePresence>{isSearchBtnClicked && <motion.input 
                                                                                layout  
                                                                                ref={searchInput} 
                                                                                initial={{width:0}} 
                                                                                animate={{width :'200px'}} 
                                                                                exit={{width:0}} 
                                                                                onChange={setPosts}
                                                                                className='bg-transparent outline-none' 
                                                                                type="text" />}</AnimatePresence>
                        </motion.div>

                        
                        
                        {/* BELL */}
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


                    </div>

                   </div>

                </div>



                {/* Posts */}
                <div className='h-full overflow-y-scroll flex flex-col gap-5 '>
                    {filteredPosts.map(post => {
                        if(post.type === 'payment') return <PostsAboutPaymentWithDescriptionAndPost  key={post.id} setClickedPost={setClickedPost} post={post}/>
                        if(post.type === 'event') return <PostsAboutEvent  key={post.id} setClickedPost={setClickedPost} post={post}/>
                        if(post.type === 'donation') return <PostsAboutDonationWithDescriptionAndPost  key={post.id} setClickedPost={setClickedPost} post={post} />
                    })} 
                </div>
            </motion.div>

            <div className='col-span-3 row-span-6 h-[100vh] overflow-y-scroll'>
                {/* Right */}
                {clickedPost.type === 'payment' && <DescriptionPostAboutPaymentWithDescriptionAndPosts  clickedPost={clickedPost}/>}
                {clickedPost.type === 'event' && <PostEventWithDescriptionAndPost clickedPost={clickedPost}/>}
                {clickedPost.type === 'donation' && <PostAboutDonationWithDescriptionAndPost clickedPost={clickedPost}/>}
            </div>

        </div>
    // </Navbar>
  )
}




export default MainPostsOfPageWithDescriptionAndPosts