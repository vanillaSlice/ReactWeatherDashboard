import React from 'react';

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

import './App.css';

const App = () => (
  <div className="App">
    <SearchBar />
    <WeatherList />
  </div>
);

export default App;
