import React from 'react'
import { useContext } from 'react'
import { master } from '../App'
import Show from './show'

function lenguage() {
   const{handlefr,handleEng} = useContext(master);
   console.log(handlefr);

   return (
      <div>
         <Show/>
         <button onClick={handleEng}>English</button>
         <button onClick={handlefr}>France</button>
      </div>
  )
}

export default lenguage
