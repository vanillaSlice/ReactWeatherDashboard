import React, { Component } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

    const { fetchWeather: fw } = this.props;
    const { city } = this.state;

    fw(city);

    this.setState({ city: '' });
  }

  handleInputChange(event) {
    this.setState({ city: event.target.value });
  }

  render() {
    const { city } = this.state;

    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Enter a city to view weather data for"
              value={city}
              onChange={this.handleInputChange}
            />
            <InputGroup.Button>
              <Button type="submit">
                <FontAwesome name="plus" tag="i" />
                <span className="sr-only">Add</span>
              </Button>
            </InputGroup.Button>
          </InputGroup>
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
