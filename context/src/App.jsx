import Lenguage from './components/lenguage'
import './App.css'
import Temperatura from './components/temperatura'
import { createContext, useState } from 'react'

export const master = createContext(null)
export const temper = createContext(null)

function App() {
  const [lang, setLang ]= useState('English')
  const [temp,setTemp ]= useState(10)

  const hadleChangeTemp = () =>{
    setTemp(Math.floor(Math.random()*40))
  }

  const handleEng = ()=>{
    setLang('English')
  }

  const handlefr = ()=>{
    console.log("click")
    setLang('Frace')
  }

  return (
    <div className="App">
      <master.Provider value={{lang, handleEng, handlefr}}>
        <temper.Provider value={{temp, hadleChangeTemp}}>
          <Temperatura/>
        </temper.Provider>
        <Lenguage/>
      </master.Provider>
    </div>
  )
}

export default App
