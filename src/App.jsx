import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoSection from './components/infoSection/infoSection.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <InfoSection title={"Past Experiences"} body={"Dolore quis enim ad adipisicing elit ea aliquip fugiat sint sint nulla excepteur. Nostrud cupidatat ullamco ea do. Elit est cillum deserunt aliquip qui. Nulla officia nostrud in adipisicing nostrud exercitation ut sit. Aute eiusmod deserunt minim laboris sit pariatur tempor aute laboris irure."}></InfoSection>
    </div>
  )
}

export default App
