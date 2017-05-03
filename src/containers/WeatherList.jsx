import React, { Component } from 'react';

export default class WeatherList extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}

function mapStateToProps (state) {
  return { weather: state.weather };
}
