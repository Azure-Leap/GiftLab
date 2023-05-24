import FilterSearch from './filter-search'
import FilterCategory from './filter-category'
import FilterProvince from './filter-province'
import FilterType from './filter-type'
import FilterPopularity from './filter-popularity'

const FilterBodySection = () => {
  return (
    <div className="body flex flex-col gap-4 items-center">
        {/* <FilterSearch/> */}
        <FilterCategory/>
        <FilterProvince/>
        <FilterType/>
        <FilterPopularity/>
    </div>
  )
}

export default FilterBodySection