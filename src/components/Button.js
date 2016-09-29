import React, { Component } from 'react'

export default class Button extends Component {
  _clicked() {
    console.log('clickT')
  }
  render () {
    return (
      <button onClick={this._clicked} className="btn btn-info button">{this.props.value}</button>
    )
  }
}
