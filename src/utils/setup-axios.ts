import axios from 'axios';
import { get } from 'lodash';
import { SERVER_URL } from '../constants/url';
import Toast from 'react-native-toast-message';
import { Alert } from 'react-native';
import store from '../redux/store';
import { logoutAction } from '../redux/auth/auth-action';

let interceptorId: number | null = null;
let interceptorResId: number | null = null;

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

export function setupAxiosResponse() {
  if (interceptorResId) {
    axios.interceptors.request.eject(interceptorResId);
  }

  interceptorResId = axios.interceptors.response.use(
    response => response,
    err => {
      if (err.response && err.response.data) {
        const { message } = err.response.data.error;
        if (message === 'ACCOUNT_LOGGED_IN_SOMEWHERE_ELSE') {
          Alert.alert('Account logged in somewhere else', '', [
            {
              text: 'OK',
              onPress: () => {
                try {
                  store.dispatch(logoutAction());
                } catch (e) {
                  // saving error
                }
              },
            },
          ]);
        } else {
          Toast.show({
            type: 'error',
            text1: `${err.response.status}`,
            text2: `${message}`,
            autoHide: false,
          });
        }

        return Promise.reject(message ? new Error(message) : err);
      }
      return Promise.reject(err);
    },
  );
}
