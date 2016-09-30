import React, { Component } from 'react'
import CalcActions from '../actions/CalcActions'

export default class Button extends Component {
  _clicked(e) {

    let num = e.target.value;

    CalcActions.receiveNums(num)
  }
  render () {
    return (
      <button onClick={this._clicked}
      className="btn btn-info button" value={this.props.value}>{this.props.value}</button>
    )
  }
}
