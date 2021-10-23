import { selector } from '.';
import { RootState } from '../store';

export const getUserInfo = selector(
  (state: RootState) => state.auth,
  auth => auth.userInfo,
);

export const getUserToken = selector(
  (state: RootState) => state.auth,
  auth => auth.token,
);
