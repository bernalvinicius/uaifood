import axios from 'axios';

const BASE_URL = 'https://developers.zomato.com/api/v2.1';
const API_KEY = '2a9e06914d345f9f4889ec2f05be86f6';

export const fetchByCity = (city) => {
  return axios.get(`${BASE_URL}/cities?q=${city}`, {
    headers: {
      'user-key': API_KEY,
    },
  });
};

export const fetchCollections = (cityId) => {
  return axios.get(`${BASE_URL}/collections?city_id=${cityId}`, {
    headers: {
      'user-key': API_KEY,
    },
  });
};
