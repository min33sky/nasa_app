import axios from 'axios';

export const getAPOD = (date = '') =>
  axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=IIwRp1MU4U9Y8TruzTTSlRMDHYrvaK5pAgYa7hTm&date=${date}`
  );
