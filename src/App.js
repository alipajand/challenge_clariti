import logo from './assets/images/logo.svg'
import './assets/scss/app.scss'

function App() {
  return (
    <div>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
