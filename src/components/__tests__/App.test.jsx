import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import SearchBar from '../../containers/SearchBar';
import WeatherList from '../../containers/WeatherList';

describe('App', () => {
  const app = shallow(<App />);

  it('renders search bar', () => {
    expect(app.find(SearchBar).length).toBe(1);
  });

  it('renders weather list', () => {
    expect(app.find(WeatherList).length).toBe(1);
  });
});
