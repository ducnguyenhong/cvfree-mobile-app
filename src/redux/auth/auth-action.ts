import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { get } from 'lodash';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';

export const loginAction = createAsyncThunk(
  'login-request',
  async (input: { username: string; password: string }) => {
    const { username, password } = input;
    const response = await axios
      .post('/auth/sign-in', {
        username,
        password,
        deviceId: uuid.v4(),
      })
      .then((res: AxiosResponse<any>) => {
        const { data, success, error } = res.data;

        if (!success || res.status > 400) {
          throw new Error(error.message ?? 'System error');
        }

        return {
          success,
          data: {
            token: get(data, 'auth.token') as string,
            userInfo: get(data, 'userInfo'),
          },
        };
      })
      .catch(e => {
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: e.message,
          autoHide: false,
        });
      });

    return response;
  },
);

export const logoutAction = createAsyncThunk('logout', () => {
  return true;
});
