import React, { Component } from 'react'

export default class Button extends Component {
  render () {
    return (
      <button className="btn btn-info button">{this.props.value}</button>
    )
  }
}
