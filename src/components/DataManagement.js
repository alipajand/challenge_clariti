import {useState} from 'react'

import DataFiltering from './DataFiltering'
import DataCalculation from './DataCalculation'
import FileReader from './FileReader'

function DataManagement() {
  const [filters, setFilters] = useState(null)
  const [data, setData] = useState([])

  return (
    <>
      <FileReader setData={setData} />

      {data && data?.length !== 0 && (
        <>
          <hr />

          <DataFiltering data={data} filters={filters} setFilters={setFilters} />
          <DataCalculation data={data} filters={filters} />
        </>
      )}
    </>
  )
}

export default DataManagement
