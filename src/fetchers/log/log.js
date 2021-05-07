import axios from 'axios';
import {API_ENDPOINT, API_TOKEN, API_VERSION, API_AUTH_TOKEN} from '@env';

const baseApiEndpoint = `${API_ENDPOINT}/v${API_VERSION}/${API_TOKEN}`;

const fetchLog = id =>
  axios.get(`${baseApiEndpoint}/Logs/${id}`, {
    headers: {
      Authorization: `Bearer ${API_AUTH_TOKEN}`,
    },
  });

const postLog = data =>
  axios.post(`${baseApiEndpoint}/Logs`, {
    headers: {
      Authorization: `Bearer ${API_AUTH_TOKEN}`,
    },
    data,
  });

export {fetchLog, postLog};
