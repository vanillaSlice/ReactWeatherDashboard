import axios from 'axios';

const ROOT_URL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'c846518da20ee016d4886d2a895c8245';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}?q=${city}&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
