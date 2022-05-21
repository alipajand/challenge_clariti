import {useState} from 'react'

function DataFiltering({data, selectedFilters}) {
  const [filters, setFilters] = useState({
    type: [],
    category: [],
    sub_category: [],
    department: [],
  })
  return <div className='app-filters'>FILTERS</div>
}

export default DataFiltering
