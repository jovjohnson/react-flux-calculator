import React, { Component } from 'react'
import Calculator from './Calculator'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>React Calculator</h1>
        <br />
        <Calculator />
      </div>
    )
  }
}
