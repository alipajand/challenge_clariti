import {useEffect, useState} from 'react'

import DataChart from './DataChart'
import DataTableWrapper from './DataTableWrapper'
import DataCalculation from './DataCalculation'

function DataCalculationWrapper({data, filters}) {
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

  console.log(filteredData)
  return (
    <div className='app-calculation'>
      <DataChart data={filteredData} />

      <hr />

      <DataTableWrapper data={filteredData} />
      <DataCalculation data={filteredData} />
    </div>
  )
}

export default DataCalculationWrapper
