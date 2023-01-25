import React from 'react' 
import { useContext } from 'react'
import { master } from '../App'

function Show() {
   const {lang} = useContext(master);

   console.log(lang)

   return (
      <div>
         {lang}
      </div>
  )
}

export default Show;
