import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Weather from '../components/weather/weather'
import './App.less'

class App extends Component {
  render() {
    return (
      <div className="box">
        <div className="up">
          <Weather />
        </div>
        <div className="down">
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
        </div>
      </div>
    )
  }
}

export default App
