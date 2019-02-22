import React, { Component } from 'react'
import './weather.less'

class Weather extends Component {
  constructor () {
    super();

    this.state = {
      temp: -5,
      weather: '雨',
      wind: 2,
      humidity: '66'
    }
  }
  render() {
    const { temp, weather, wind, humidity } = this.state
    return (
      <div className="wrapper">
        <p>{temp}°</p>
        <p>{weather}</p>
        <p>北风{wind}级</p>
        <p>湿度{humidity}%</p>
      </div>
    )
  }
}

export default Weather
