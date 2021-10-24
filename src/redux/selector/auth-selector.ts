import { UserInfo } from '../../type/user.type';
import { selector } from '.';
import { RootState } from '../store';

export const getUserInfo = selector(
  (state: RootState) => state.auth,
  auth => auth.userInfo as UserInfo,
);

export const getUserToken = selector(
  (state: RootState) => state.auth,
  auth => auth.token as string,
);
