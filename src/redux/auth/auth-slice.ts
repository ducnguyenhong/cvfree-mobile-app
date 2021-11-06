import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../type/user.type';
import { loginAction, logoutAction, updateUserInfo } from './auth-action';

export interface AuthState {
  token: string | null;
  userInfo: UserInfo | null;
  request?: {
    loading?: boolean;
    error?: string;
  };
  deviceId: string;
}

const initialState: AuthState = {
  token: null,
  userInfo: null,
  deviceId: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        const loginResponse = action.payload?.data;
        state.token = loginResponse?.token || null;
        state.userInfo = loginResponse?.userInfo || null;
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
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      });
  },
});

export default authSlice.reducer;
