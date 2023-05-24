import FilterHeaderSection from './filter-header'
import FilterBodySection from './filter-body'

// Posts -- Filter Panel
export const Filter = () => {
  return (
    <div className="w-[300px] bg-white p-[24px] rounded-[20px]">
        <FilterHeaderSection/>
        <FilterBodySection/>
    </div>
  )
}
