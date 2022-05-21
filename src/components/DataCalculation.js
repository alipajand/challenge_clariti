import DataChart from './DataChart'
import DataTable from './DataTable'
import {useEffect, useState} from 'react'

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
    return <div className='text-center'>No Data Available {filters && 'With Selected Filters'}!</div>

  return (
    <>
      <DataTable data={filteredData} />
      <DataChart data={filteredData} />
    </>
  )
}

export default DataCalculation
