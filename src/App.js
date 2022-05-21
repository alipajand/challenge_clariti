import './assets/scss/app.scss'
import logo from './assets/images/logo.svg'
import DataManagement from './components/DataManagement'

function App() {
  return (
    <div>
      <header>
        <div className='app-header'>
          <img src={logo} className='app-logo' alt='logo' />
          <div className='app-logo-text'>Code Challenge</div>
        </div>
      </header>

      <div className='app-container'>
        <DataManagement />
      </div>
    </div>
  )
}

export default App
