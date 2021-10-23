import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { get } from 'lodash';

export const loginAction = createAsyncThunk(
  'login-request',
  async (input: { username: string; password: string }) => {
    const { username, password } = input;
    const response = await axios
      .post('/auth/sign-in', {
        username,
        password,
      })
      .then((res: AxiosResponse<any>) => {
        console.log('ducnh2', res);

        const { data, success, error } = res.data;

        console.log('ducnh5', data);

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
      .catch(e => e.message);

    return response;
  },
);

export const logoutAction = createAsyncThunk('logout', () => {
  return true;
});
