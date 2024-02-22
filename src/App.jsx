import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputWithLabel from './components/Input/Inputwithlabel.component'

function App() {
  return (
    <>
    <InputWithLabel multiline={false} Label ={"Name"} placeholder={"Enter Your name"}/>
    <InputWithLabel multiline={false} Label ={"Phone"} placeholder={"Enter Your Number"}/>
    <InputWithLabel multiline={false} Label ={"Faculty"} placeholder={"Enter Your Faculty"}/>
    <InputWithLabel multiline={false} Label ={"Age"} placeholder={"Enter Your Age"}/>
    <InputWithLabel multiline={true} Label ={"Discription"} placeholder={"Enter Your Disciption"}/>
    </>
  )
}

export default App
