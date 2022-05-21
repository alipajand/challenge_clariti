import DataChart from './DataChart'
import DataTable from './DataTable'
import {useEffect, useState} from 'react'

function DataCalculation({data, filters}) {
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    console.log({data, filters})
    const result = data.filter((item) => item)
    setFilteredData(result)
  }, [filters, data])

  return (
    <>
      <DataTable data={filteredData} />
      <DataChart data={filteredData} />
    </>
  )
}

export default DataCalculation
