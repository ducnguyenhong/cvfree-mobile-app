import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../type/user.type';
import { loginAction, logoutAction } from './auth-action';

export interface AuthState {
  token: string | null;
  userInfo: UserInfo | null;
  request?: {
    loading?: boolean;
    error?: string;
  };
}

const initialState: AuthState = {
  token: null,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        const loginResponse = action.payload.data;
        state.token = loginResponse.token;
        state.userInfo = loginResponse.userInfo;
        state.request = {
          loading: false,
        };
      })
      .addCase(loginAction.pending, state => {
        state.request = {
          loading: true,
        };
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.request = {
          loading: false,
          error: action.error.message,
        };
      })
      .addCase(logoutAction.fulfilled, state => {
        state.token = null;
        state.userInfo = null;
      });
  },
});

export default authSlice.reducer;
