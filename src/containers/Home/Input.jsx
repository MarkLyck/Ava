import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="input-container">
        <input type="text" placeholder="Say something"/>
      </div>
    )
  }
}

export default Input
