import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import for testing
// import Modal from './components/Modal';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // Modal state
  const [showModal, setShowModal] = useState(false);

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
      {/* Buttons for testing */}
      {/* <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </button>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          hide
        </button>
      </Modal> */}
    </div>
  );
}

export default App;
