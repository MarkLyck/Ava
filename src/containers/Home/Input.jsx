import React, { Component } from 'react'
import mic from './assets/mic.svg'
import './input.scss'

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="input-container">
        <input type="text" placeholder="Say something"/>
        <button className="mic-btn">
          <img src={mic} />
        </button>
      </div>
    )
  }
}

export default Input
