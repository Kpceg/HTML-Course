import React from 'react'

const Footer= ({name,age}) => {
    return (
        <div>
            <ol>
                <li> FUN </li>
            </ol>
            <p style={{backgroundColor:'teal', padding:'5px', color:'Orange' }}> Name {name} </p>
            <p style={{backgroundColor:'teal', padding:'5px', color:'Orange' }}> Age {age} </p>
        </div>
    )
} 

/*
import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <h1>
            name {this.props.name}
        </h1>
      </div>
    )
  }
}
*/

export default Footer

