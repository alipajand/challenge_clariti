import {useEffect, useState} from 'react'

import DataChart from './DataChart'
import DataTableWrapper from './DataTableWrapper'

function DataCalculation({data, filters}) {
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (!filters && data?.length) return setFilteredData(data)
    if (!filters && data?.length === 0) return setFilteredData([])

    const filterValues = Object.entries(filters)
    const result = data.filter((item) => {
      let showData = true

      filterValues.forEach(([filterKey, filterValue]) => {
        if (!item[filterKey]?.toLowerCase()?.includes(filterValue?.toLowerCase())) showData = false
      })
      return showData
    })

    setFilteredData(result)
  }, [filters, data])

  if (filteredData?.length === 0)
    return <div className='text-center app-calculation'>No Data Available {filters && 'With Selected Filters'}!</div>

  return (
    <div className='app-calculation'>
      <DataChart data={filteredData} />
      <DataTableWrapper data={filteredData} />
    </div>
  )
}

export default DataCalculation
