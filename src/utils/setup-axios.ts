import axios from 'axios';
import { get } from 'lodash';
import { SERVER_URL } from '../constants/url';

let interceptorId: number | null = null;

export function setupAxios(token?: string) {
  if (interceptorId) {
    axios.interceptors.request.eject(interceptorId);
  }

  interceptorId = axios.interceptors.request.use(
    config => {
      if (!config.url?.startsWith('https://')) {
        config.url = `${SERVER_URL}${config.url}`;
        config.timeout = 20000;
      }
      if (token && token !== '') {
        const currentAuthorization = get(config, 'headers.Authorization');
        if (
          typeof currentAuthorization === 'undefined' ||
          currentAuthorization === null ||
          currentAuthorization === ''
        ) {
          config.headers = {
            ...config.headers,
            Authorization: token.startsWith('Bearer')
              ? token
              : `Bearer ${token}`,
          };
        }
      }

      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    },
  );
}
