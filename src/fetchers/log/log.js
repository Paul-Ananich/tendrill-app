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
  axios.post(`${baseApiEndpoint}/Logs`, data, {
    headers: {
      Authorization: `Bearer ${API_AUTH_TOKEN}`,
    },
  });
  
const patchLog = data =>
  axios.patch(`${baseApiEndpoint}/Logs`, data, {
    headers: {
      Authorization: `Bearer ${API_AUTH_TOKEN}`,
    },
  });

export {fetchLog, postLog, patchLog};
