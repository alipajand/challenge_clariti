import './assets/scss/app.scss'

import logo from './assets/images/logo.svg'
import FileReader from './components/FileReader'
import {useState} from 'react'

function App() {
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

      <div className='app-container'>
        <FileReader setData={setData} />
      </div>
    </div>
  )
}

export default App
