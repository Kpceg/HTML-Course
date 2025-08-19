//  import React,{useReducer} from 'react'
//  import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
//  import Header from './Header'
//  import Footer from './Footer'
//  import NotFound from './NotFound'
// import './App.css'
// import { useState } from 'react'

/*
Using Class

class App extends Component {
 render() {
     return (
    <div>
      <Header />
      <Footer />
    </div>
)
 } 
}
 */
/* Using Function - This is easier */
// function App() {
//   return (
//     <div>
//       <h1> APP </h1>
//       <Header heading="massu" />
//       <Footer name="Boys" />
//       <Footer name="Girls" age='21' />
//     </div>
// )
// }


// Counter APP using UseState
// const App = () => {
//   const [num, setNum] = useState(100)
//   const inc=()=> {
//     setNum(num+1)
//   }
//   const dec=()=> {
//     setNum(num-1)
//   }
//   return (
//     <div>
//       <button onClick={inc}> + </button>
//       <h3>Count {num}</h3>
//       <button onClick={dec}> - </button>
//     </div>
//   )
// }

// To change theme of a webpage

// const App = () => {
//   const [theme, setTheme] = useState(false)
//   const themestyle = {
//     backgroundColor:theme?'black':'white',
//     color:theme?'white':'black'
//   }
//   return (
//     <div style={themestyle}>
//       <h2>{theme?"Dark":"Light"}</h2>
//       <button onClick={()=>setTheme(!theme)}> change </button>
//     </div>
//   )
// }


// import React,{useState} from 'react'
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import Header from './Header'
// import Footer from './Footer'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/header' element={<Header/>}/>
//         <Route path='/footer' element={<Footer/>}/>
//       </Routes>
//       <nav>
//         <ul>
//           <li><Link to='/header'> Header</Link></li>
//           <li><Link to='/footer'> Footer </Link></li>
//         </ul>
//       </nav>
//     </Router>
//   )
// }

// To perform todo

// function App() {
//   const [items, setItems] = useState([])
//   const [input, setInput] = useState('')
//   const addItems =()=> {
//     setItems([...items,input])
//     setInput("")
// }
  
//   return (
//     <div>
//       <h2>TODO LIST</h2>
//       <input type="text" placeholder="ADD ITEMS" value ={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={addItems}> Add </button>
//       <ul>
//         {
//           items.map((val,index) => (
//             <li key={index}>{val}</li>
//           )
//         )}
//       </ul>
//     </div>
//   )
// }


/* Creating Counter with Use Reducer instead of UseState
*/

// function reducefn(state,action) {
//   switch(action.type) {
//     case 'inc':
//       return{count:state.count+1}
//     case 'dec':
//       return{count:state.count-1}
//     default:
//       return state.count
//   }
// }

// const App =() => {
//   const [state,dispatch] = useReducer(reducefn,{count:1, name:"abc"})
//   return (
//     <div>
//       <button onClick={()=>dispatch({type:"inc"})}>+</button>
//       <h3>count: {state.count}</h3>
//       <button onClick={()=> dispatch({type:"dec"})}>-</button>
//       <h3>{state.name}</h3>
//     </div>
//   )   
  // }


 // Prop Drilling Example
 
// import React from 'react'
// import First from './First'
 
//  function App() {
//   const course="React"
//    return (
//      <div>
//       <First course={course}/>
//      </div>
//    )
//  }
 
/*Example of createContext (Better than using props) */

// import React, { createContext } from 'react'
// import First from './First'
 
// export const context1=createContext()
//  function App() {
//   const course="React"
//    return (
//      <context1.Provider value={course}>
//       App
//       <First/>
//       </context1.Provider>
//    )
//  }

/* Controlled and Uncontrolled Forms */

// import { useState } from "react"
// import React, { useRef } from 'react'

// function App() {
//   const [name, setName] = useState('')

//   function handlecontrolled(e) {
//     e.preventDefault()
//     alert("Controlled "+name)
//   }

//   const inputref=useRef()
//   function handleuncontrolled(e) {
//     e.preventDefault()
//     alert("Uncontrolled "+ inputref.current.value)
//   }

//   return (
//     <div>
//       <h2>Controlled Component</h2>
//       <form action="" onSubmit={handlecontrolled}>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//         <button type="submit"> Submit </button>
//         </form>
//       <h2>Uncontrolled Component</h2>
//       <form action="" onSubmit={handleuncontrolled}>
//         <input type="text" ref={inputref} />
//         <button type="submit"> Submit </button>
//       </form>
//     </div>
//   )
// }

// export default App
 
/*UseMemo Example*/ 
// import React, { useState , useMemo } from 'react'

// function App() {
// const [number, setNumber] = useState(0)
// const [dark,setDark] = useState(false)
// const double=slow(number)
// //const double=useMemo(() => {return slow(number)}, [number])
// const ab={
//   backgroundColor:dark?"black":"white",
//   color:dark?"white":"black"
// }

//   return (
//     <div>
//       <input type="number" value={number} onChange ={(e) => setNumber(Number(e.target.value))}/>
//       <button onClick={() => setDark((a)=> !a)}> Submit </button>
//       <div style={ab} > {double} </div>
//     </div>
//   )
// }

// export default App

// function slow(num) {
//   for (let i=0;i<1000000000;i++) {}
//   return num*2
// }
 


// ERROR NOT FOUND PRINTING
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Header/>}/>
//         <Route path='/footer' element={<Footer/>}/>
//         <Route path='*' element={<NotFound/>}/>

//       </Routes>
//       <nav>
//         <ul>
//           <li><Link to='/'> Header</Link></li>
//           <li><Link to='/footer'> Footer </Link></li>
//           <li><Link to='/Wrongpath'> Wrong </Link></li>
//           <li><Link to='/Wrong1path'> wrong1 </Link></li>
//         </ul>
//       </nav>
//     </Router>
//   )
// }




/* Using Arrow Function

const App= ()=> {
  return 
    <div>
      <h1> App is a first Arrow functional component </h1>
      <p>PARAW Arrow</p>
    </div>
    
)
}
*/

/* Class BaComponents

class App extends Component {
  render() {
    return (
      <div> App </div> 
    )
  
}
  */

//export default App


// useNavigate Hook
// import Header from './Header'
// import Footer from './Footer'
// import {Routes,Route,Link, useNavigate} from 'react-router-dom'
// import First from './First'
// function App() {
//   const navigate=useNavigate() 
//   function navigation() {
//     navigate('/first')
// }
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Header/>}/>
//         <Route path='/footer' element={<Footer/>}/>
//         <Route path='/first' element={<First/>}/>
//       </Routes>
//       <nav>
//         <ul>
//           <li><Link to='/'> Header</Link></li>
//           <li><Link to='/footer'> Footer </Link></li>
//           <li><Link to='/Wrongpath'> Wrong </Link></li>
//           <li><Link to='/Wrong1path'> wrong1 </Link></li>
//         </ul>
//       </nav>
//       <button onClick={navigation}>First</button>
//     </div>
//   )
// }

// export default App

// UseEffect and its 3 types based on what value is being passed

// import React, { useEffect, useState } from 'react'

// function App() {

//   const [num, setNum] = useState(0)
//   const [num1, setNum1] = useState(0)
//   useEffect(() => {
//     console.log("UseState Render num")
//     console.log(num) 
//      console.log("UseState Render num1")
//     console.log(num1)},[num1])  
  
//   return (
//     <div>
//       <button onClick={() => {setNum(num+1)}}>+</button>
//       <h3>Count: {num} </h3>
//       <button onClick={() => {setNum(num-1)}}>-</button>
//        <button onClick={() => {setNum1(num1+1)}}>+</button>
//       <h3>Count: {num1} </h3>
//       <button onClick={() => {setNum1(num1-1)}}>-</button>
//     </div>
//   )
// }

// export default App
// Asssingment
// import React from 'react'
// import Blog from './Blog'

// function App() {
//   return (
//     <div>
//       <Blog />
//     </div>
//   )
// }

// export default App
// try catch error handling code
import React from 'react'
import { useState } from 'react'

function App() {

  const [num, setNum] = useState(1)
  const [err, setErr] = useState("")
  function handleDivision() {
    try {
      if(num===0) {
      throw new Error("Number is not divisible by Zero")
    }
    else {
       alert(100/num)  
       setErr("")
    } }
    catch(error) {
      setErr(error.message)
    }
  } 

  return (
    <div>
      <h2>Divide</h2>
      <input type="number" value={num} onChange={(e)=>setNum(Number(e.target.value))}>
      </input>
      <button onClick={handleDivision}>Divide</button>
      {err}
    </div>
  )
}

export default App