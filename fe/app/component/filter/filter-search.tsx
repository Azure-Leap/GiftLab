{/* Search by title */}

import React from 'react'
import {BsSearch} from 'react-icons/bs'

const FilterSearch = () => {
  return (
    <div className='flex flex-col gap-2'>
        <p className='signed-in-black font-medium text-xs'>Search</p>
        {/* Search input */}
        <div className="flex items-center gap-[8px] rounded-[60px] p-[10px] overflow-hidden shadow-[0_2px_7px_rgba(20,20,43,.08)] border-[1.5px] transition-[border] duration-[300ms] border-[#eff0f6] hover:border-[#4a3aff]">
            <p className='text-purple'><BsSearch/></p>
            <input type="search" className="outline-none w-11/12 text-[14px] placeholder-placeholder-black" placeholder='Search for events' />
        </div>
    </div>
  )
}

export default FilterSearch