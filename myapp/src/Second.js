import React,{useContext} from 'react'
import {context1} from './App'

/* PROPS DRILLING*/
// function Second({course}) {
//   return (
//     <div>Second
//         <h3> {course} is a js library </h3>
//     </div>
//   )
// }

/* CONTEXT Example*/
function Second() {
    const a=useContext(context1)
  return (
    <div>Second
        <h3> {a} is a js library </h3>
    </div>
  )
}

export default Second