import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import PropTypes from '../../node_modules/prop-types';

import { fetchWeather } from '../actions';

import './SearchBar.css';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.city);

    this.setState({ city: '' });
  }

  handleInputChange(event) {
    this.setState({ city: event.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city to view weather data for"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            <FontAwesome name="plus" tag="i" size="2x" />
            <span className="sr-only">Add</span>
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
