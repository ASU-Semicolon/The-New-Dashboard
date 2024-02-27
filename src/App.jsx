import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button/Button.component';
import {IoBasket} from 'react-icons/io5';
import {IoAlarm} from 'react-icons/io5';
import {IoClose} from 'react-icons/io5';
function App() {
  const [count, setCount] = useState(0)
  const showAlert = () => {
    alert("I'm an alert");
  }

  return (
    <div className="App">

      <Button select="secondary" outline={true} rounded={false} small>secondary</Button>&nbsp;&nbsp;&nbsp;
      <Button select="secondary" rounded={false} outline={false} small onClick={showAlert} ><IoAlarm></IoAlarm>secondary</Button>&nbsp;&nbsp;&nbsp;
     

      <Button select="primary" outline={true} rounded={false} small><IoBasket></IoBasket>secondary</Button>&nbsp;&nbsp;&nbsp;
      <Button select="primary" rounded={false} outline={false} small onClick={showAlert} ><IoClose></IoClose>secondary</Button>&nbsp;&nbsp;&nbsp;


      <Button select="warning" outline={true} rounded={false} small><IoBasket></IoBasket>warning</Button>&nbsp;&nbsp;&nbsp;
      <Button select="warning" rounded={false} outline={false} small onClick={showAlert} ><IoClose></IoClose>warning</Button>&nbsp;&nbsp;&nbsp;

      <div className="DivButton">

      <Button select="secondary" rounded outline={false} large><IoAlarm></IoAlarm> secondary </Button>
      </div>
     
    
      
    </div>

  )
}

export default App
