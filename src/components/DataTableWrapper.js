import {useState} from 'react'
import DataTableRecords from './DataTableRecords'
import DataTableTotal from './DataTableTotal'

const columns = ['name', 'category__c', 'department__c', 'sub_category__c', 'type__c', 'quantity__c', 'unit_price__c']

function DataTableWrapper({data}) {
  const [showRecords, toggleRecords] = useState(false)

  return (
    <div>
      <button className='app-button' onClick={() => toggleRecords(!showRecords)}>
        Show Records
      </button>

      {showRecords && <DataTableRecords data={data} columns={columns} />}

      <DataTableTotal data={data} columns={columns} />
    </div>
  )
}

export default DataTableWrapper
