import {useEffect, useState} from 'react'

import DataTableTotal from './DataTableTotal'
import DataTableRecords from './DataTableRecords'
import DataChartCalculation from './DataChartCalculation'

function DataCalculation({data, filters}) {
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (!filters && data?.length) return setFilteredData(data)
    if (!data || (!filters && data?.length === 0)) return setFilteredData([])

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
      <DataChartCalculation data={filteredData} />

      <DataTableTotal data={filteredData} />
      <DataTableRecords data={filteredData} />
    </div>
  )
}

export default DataCalculation
