import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GoogleMap from '../components/GoogleMap';
import Graph from '../components/Graph';

import './WeatherList.css';

export class WeatherList extends Component {
  renderWeather() {
    return this.props.weather.map((weather) => {
      const { city, list } = weather;
      const { name } = city;
      const { lat, lon } = city.coord;
      const temperatures = list.map(item => item.main.temp);
      const pressures = list.map(item => item.main.pressure);
      const humidities = list.map(item => item.main.humidity);

      return (
        <tr key={name}>
          <td>
            <GoogleMap lat={lat} lng={lon} />
          </td>
          <td>
            <Graph data={temperatures} colour="#4ec9b0" />
          </td>
          <td>
            <Graph data={pressures} colour="#ce8c55" />
          </td>
          <td>
            <Graph data={humidities} colour="#9cdcf7" />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Table className="WeatherList" striped responsive>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWeather()}
        </tbody>
      </Table>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
