import {BsStars} from 'react-icons/bs'

const FilterHeaderSection = () => {
  return (
    <div className="flex justify-between pb-8 mb-6 border-b border-filter-border-color">
    <div className="flex gap-1 items-center">
        <p className='text-purple text-[20px]'><BsStars/></p>
        <h1 className='signed-in-black font-bold text-[18px]'>Filter</h1>
    </div>
    <div>
        <p className="text-purple font-medium">Reset</p>
    </div>
</div>
  )
}

export default FilterHeaderSection