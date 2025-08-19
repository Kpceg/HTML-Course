import React from 'react'



function Header(props) {
    const cssStyle = {
        listStyleType: 'none', 
        margin: '0px',
        padding: '0px',
        display: 'inline-block',
        backgroundColor: 'yellowgreen'
    }

  return (
    <div>
        <ul style ={cssStyle}>
            <li> FIRST </li>
            <li> SECOND </li>
            <li> THIRD </li>
            <li> Fourth </li>
            <li> {props.heading} </li>
        </ul>

    </div>
    
)
} 

export default Header