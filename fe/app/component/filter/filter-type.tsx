{/* Filter with type ==> Event or Dono */}
import { usePosts } from '@/context/posts'
import {BsQuestionCircle} from 'react-icons/bs'
import {IoIosArrowDropdown} from 'react-icons/io'


const FilterType = () => {
  const postsContext = usePosts();

  return (
    <div className='flex flex-col gap-2'>
        {postsContext.isPageWithDescription ? '' : <p className='signed-in-black font-medium text-xs cursor-pointer'>Type</p>}
        {/* Search input */}
        <div className=" bg-transparent flex justify-between items-center gap-[8px] rounded-[60px] p-[10px_18px_10px_10px] overflow-hidden shadow-[0_2px_7px_rgba(20,20,43,.08)] border-[1.5px] transition-[border] duration-[300ms] border-[#eff0f6] hover:border-[#4a3aff]">
        <div className='flex items-center gap-[8px]'>
                <p className='text-purple'><BsQuestionCircle/></p>
                <input type="search" className=" bg-transparent outline-none w-9/12 text-[14px] placeholder-placeholder-black" placeholder='Select type' readOnly  />
        </div>
            <p className='text-dropdown-toggle'><IoIosArrowDropdown/></p>
        </div>
    </div>
  )
}

export default FilterType