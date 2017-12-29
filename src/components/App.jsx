import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

import './App.css';

export default () => (
  <div className="App">
    <Navbar fixedTop inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href=".">React Weather Dashboard</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <Grid>
      <SearchBar />
      <WeatherList />
    </Grid>
  </div>
);
