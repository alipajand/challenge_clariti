import {useState} from 'react'

import './assets/scss/app.scss'
import logo from './assets/images/logo.svg'

import FileReader from './components/FileReader'
import DataCalculation from './components/DataCalculation'
import DataFiltering from './components/DataFiltering'

function App() {
  const [filters, setFilters] = useState(null)
  const [data, setData] = useState([
    {
      category__c: 'Tier 2',
      department__c: 'Support',
      description__c:
        'nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu',
      id: 'a00P0000006KXnPIAW',
      name: 'Capers - Ox Eye Daisy',
      quantity__c: 9,
      sub_category__c: 'Cat1',
      type__c: 'TypeB',
      unit_price__c: 2.82,
    },
  ])

  return (
    <div>
      <header>
        <div className='app-header'>
          <img src={logo} className='app-logo' alt='logo' />
          <div className='app-logo-text'>Code Challenge</div>
        </div>
      </header>

      {data?.length && (
        <div className='app-container'>
          <FileReader setData={setData} />
          <DataFiltering data={data} filters={filters} setFilters={setFilters} />
          <DataCalculation data={data} filters={filters} />
        </div>
      )}
    </div>
  )
}

export default App
