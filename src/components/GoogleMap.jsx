import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const API_KEY = 'AIzaSyAXyEamwfpKmQvyDlV0OXVGFV9Fhw8rSi4';

const defaultZoom = 10;
const style = {
  width: '125px',
  height: '125px',
  position: 'relative',
  margin: '0 auto',
  padding: 0,
};

const GoogleMap = ({ lat, lng }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: API_KEY }}
    center={{ lat, lng }}
    zoom={defaultZoom}
    style={style}
  />
);

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default GoogleMap;
