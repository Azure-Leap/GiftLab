'use client'
{/* Filter with category */}
import { categoryListInfo } from '@/data/home/category'
import {motion, AnimatePresence} from 'framer-motion'
import { usePosts } from '@/context/posts'
import { useEffect, useState } from 'react'
import {GoTag} from 'react-icons/go'
import {IoIosArrowDropdown} from 'react-icons/io'
import { posts } from '@/data/home/posts'
// import {motion, AnimatePresence} from 'framer-motion'

const FilterCategory = () => {

  const postsContext = usePosts();

  const [isOpen, setIsOpen] = useState(false);

  const [categoryListInfoState, setCategoryListInfoState] = useState(categoryListInfo);

  useEffect(()=>{
  
  },[categoryListInfoState])


  return (
   <AnimatePresence>
       <motion.div initial={{x : -100}} animate ={{x:0}} exit={{x : -100}} onClick={()=>setIsOpen(!isOpen)} className='relative flex flex-col gap-2 cursor-pointer'>
        {postsContext.isPageWithDescription ? '' : <p className='signed-in-black font-medium text-xs cursor-pointer'>Category</p>}
        {/* Search input */}
        <div className="flex justify-between items-center gap-[8px] rounded-[60px] p-[10px_18px_10px_10px] overflow-hidden shadow-[0_2px_7px_rgba(20,20,43,.08)] border-[1.5px] transition-[border] duration-[300ms] border-[#eff0f6] hover:border-[#4a3aff]">
          <div className='flex items-center gap-[8px]'>
                  <p className='text-purple'><GoTag/></p>
                  <input type="search" className="outline-none w-8/12 text-[14px] placeholder-placeholder-black bg-transparent cursor-pointer" placeholder='Select category' readOnly  />
          </div>
          <p className='text-dropdown-toggle'><IoIosArrowDropdown/></p>
        </div>


        {/* This absooute panel give us to filter category */}
        <AnimatePresence>
        {isOpen && (
                      <motion.div layout initial = {{opacity : 0.4, scale : 0.6}} animate = {{opacity : 1, scale : 1, transformOrigin:'top'}} exit = {{opacity : 0.4, scale : 0}} transition={{duration:0.2}}  onClick={(e)=> e.stopPropagation()} className='absolute top-20 grid grid-cols-2 w-[420px] z-[999] bg-white border border-[#e5e5ef] p-[34px_20px_26px] shadow-[0_2px_10px_rgba(13,10,44,.06)] rounded-[14px]'>
                                  {postsContext.categoryListInfoState.map((category, i) => (
                                    <div key={i} className='flex gap-5 text-dropdown-toggle mb-3'>
                                        <input onClick={()=>{
                                          
                                          postsContext.setSelectedCategoryList(category.label);
                                          
                                          postsContext.setFilteredPosts(posts)
                                          
                                          postsContext.setCategoryListInfoState(category.checked, i);
                 

                                        }} type="checkbox" name="#" id="#" checked={category.checked ? true : false}   />
                                        <p>{category.title}</p>
                                    </div>
                                  ))}
                              </motion.div>
                    )}
          </AnimatePresence>
    </motion.div>
   </AnimatePresence>
  )
}

export default FilterCategory















      {/* absolute list for category ==> component bolgoh
        <div className='absolute flex flex-col gap-6 top-full mt-3 w-[400px] bg-white p-[34px_20px]  shadow-[0_2px_10px_rgba(13,10,44,.06)] rounded-[14px]'>

            <div className='grid grid-cols-2 gap-4 justify-between'>
                {
                        [1,1,1,1,1,1,1,1].map(div =>     
                        <div className='flex gap-2 items-center'>
                            <input className='scale-125 opacity-30' type="checkbox" />
                            <p className='text-purple text-[13px] '><BsSearch/></p>
                        <div>Uvs</div>
                    </div>)
                    }
            </div>

            <button className='p-[6px_9px] text-[13px] bg-btn-bg-grey rounded-[50px] me-auto text-purple font-bold'>Reset</button>
        </div> */}