import React, { useContext } from 'react'
import { temper } from '../App'



function Temperatura() {
   const {hadleChangeTemp,temp} = useContext (temper);
   console.log(hadleChangeTemp)
    return (
      <div>
        <h1>{temp}</h1>
        <button onClick = {hadleChangeTemp}>Temperatura</button>
    </div> 
  )
}

export default Temperatura
