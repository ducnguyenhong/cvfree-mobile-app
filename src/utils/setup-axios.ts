import axios from 'axios';
import { get } from 'lodash';
import { SERVER_URL } from '../constants/url';
import Toast from 'react-native-toast-message';

let interceptorId: number | null = null;
let interceptorResId: number | null = null;

export function setupAxios(token?: string) {
  if (interceptorId) {
    axios.interceptors.request.eject(interceptorId);
  }

  interceptorId = axios.interceptors.request.use(
    config => {
      console.log('ducnh request', config);

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

export function setupAxiosResponse() {
  if (interceptorResId) {
    axios.interceptors.request.eject(interceptorResId);
  }

  interceptorResId = axios.interceptors.response.use(
    response => {
      console.log('ducnh response', response.data);
      return response;
    },
    err => {
      console.log('ducnh error', err.response.data);

      if (err.response && err.response.data) {
        const { message } = err.response.data.error;
        Toast.show({
          type: 'error',
          text1: `${err.response.status}`,
          text2: `${message}`,
          autoHide: false,
        });

        return Promise.reject(message ? new Error(message) : err);
      }
      return Promise.reject(err);
    },
  );
}
