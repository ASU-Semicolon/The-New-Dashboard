import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import for testing
// import Modal from './components/Modal';

import './App.css';
import Dropdown from './components/DropDown/dropdown.component';
function App() {
 const option=[{value:2024},{value:2025},{value:2026}]

  return (
   <Dropdown options={option}/>
    
  );
}

export default App;
