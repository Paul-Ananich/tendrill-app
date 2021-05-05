import axios from 'axios';
import {API_ENDPOINT, API_TOKEN, API_VERSION, API_AUTH_TOKEN} from '@env';

const baseApiEndpoint = `${API_ENDPOINT}/v${API_VERSION}/${API_TOKEN}`;

const fetchLocationsList = () =>
  axios.get(`${baseApiEndpoint}/Areas`, {
    headers: {
      Authorization: `Bearer ${API_AUTH_TOKEN}`,
    },
  });

const fetchFarm = id =>
  axios.get(`${baseApiEndpoint}/Farms/${id}`, {
    headers: {
      Authorization: `Bearer ${API_AUTH_TOKEN}`,
    },
  });

export {fetchLocationsList, fetchFarm};
