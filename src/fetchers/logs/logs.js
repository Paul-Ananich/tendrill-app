import axios from 'axios';
import {API_ENDPOINT, API_TOKEN, API_VERSION, API_AUTH_TOKEN} from '@env';

const baseApiEndpoint = `${API_ENDPOINT}/v${API_VERSION}/${API_TOKEN}`;

const fetchLogs = () =>
  axios.get(`${baseApiEndpoint}/Logs/rec4HohbaTXDUxcqa`, {
    headers: {
      Authorization: `Bearer ${API_AUTH_TOKEN}`,
    },
  });

export {fetchLogs};
