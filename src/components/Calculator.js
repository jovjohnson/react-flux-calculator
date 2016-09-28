import React, { Component } from 'react'

import Display from './Display'
import Button from './Button'

export default class Layout extends Component {

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display />
          <div className="button-wrapper">
            <Button value="1"/>
            <Button value="2"/>
            <Button value="3"/>
            <Button value="+"/>
            <br />
            <Button value="4"/>
            <Button value="5"/>
            <Button value="6"/>
            <Button value="-"/>
            <br />
            <Button value="7"/>
            <Button value="8"/>
            <Button value="9"/>
            <Button value="x"/>
            <br />
            <Button value="0"/>
            <Button value="."/>
            <Button value="/"/>
            <Button value="="/>
          </div>
        </div>
      </div>
    )
  }
}
