import React, { Component } from 'react'

export default class Button extends Component {
  _clicked(e) {
    console.log(e.target.value);
  }
  render () {
    return (
      <button onClick={this._clicked}
      className="btn btn-info button" value={this.props.value}>{this.props.value}</button>
    )
  }
}
