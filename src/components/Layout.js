import React, { Component } from 'react'
import Calculator from './Calculator'

import ValueStore from '../stores/ValueStore'


export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operand: ValueStore.getNumbers(),
      operation: '',
      total: ''
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    ValueStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    ValueStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      operand: ValueStore.getNumbers(), //getAllNums
      operation: '',//getOperation
      total: ''//getTotal
    })

    console.log('state', this.state);
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
