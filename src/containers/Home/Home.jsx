import React, { Component } from 'react'
import Input from './Input'
import './home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <h1>home</h1>
        <Input />
      </div>
    )
  }
}

export default Home
