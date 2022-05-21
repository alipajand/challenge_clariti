import {useState} from 'react'
import DataTable from './DataTable'

function DataTableWrapper({data}) {
  const [showRecords, toggleRecords] = useState(false)

  return (
    <div>
      <button className='app-button' onClick={() => toggleRecords(!showRecords)}>
        Show Records
      </button>

      {showRecords && <DataTable data={data} />}
    </div>
  )
}

export default DataTableWrapper
