import React, { useRef, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useCartStore } from '@/context/store';
import { usePosts } from '@/context/posts';
import { FiSearch } from 'react-icons/fi';


const SearchInputDoingFilterPostsByTitle = () => {

    const cartStore = useCartStore(),
    {filteredPosts, setFilteredPosts, setPageWithDescription, clickedPost, setClickedPost} = usePosts();

    const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false)
    let searchInput : any = useRef();


    const [hideFilterInputs, setHideFilterInputs] = useState(true)

    function setPosts(e : any){

        let searchInputValue = e.target.value.toLowerCase(),
            filteredPosts1 = filteredPosts.filter((post) => post.title.toLowerCase().indexOf(searchInputValue!) == 0);

        !searchInputValue ? setFilteredPosts(posts) : setFilteredPosts(filteredPosts1)
    }


  return (
                    
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
  )
}

export default SearchInputDoingFilterPostsByTitle