import {useState} from 'react'

import {AppContext} from '../AppContext'
import DataFiltering from './DataFiltering'
import DataCalculation from './DataCalculation'
import FileReader from './FileReader'

function DataManagement() {
  const [data, setData] = useState([
    {
      category__c: 'Tier 2',
      department__c: 'Support',
      id: 'a00P0000006KXnPIAW',
      name: 'Capers - Ox Eye Daisy',
      quantity__c: 9,
      sub_category__c: 'Cat1',
      type__c: 'TypeB',
      unit_price__c: 2.82,
    },
  ])

  const [states, setStates] = useState(null)
  const [filters, setFilters] = useState(null)

  return (
    <>
      <FileReader setData={setData} />

      {data?.length !== 0 && (
        <>
          <hr />

          <AppContext.Provider value={{states, setStates}}>
            <DataFiltering data={data} filters={filters} setFilters={setFilters} />
            <DataCalculation data={data} filters={filters} />
          </AppContext.Provider>
        </>
      )}
    </>
  )
}

export default DataManagement
