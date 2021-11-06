import { selector } from '.';
import { RootState } from '../store';

export const getLanguage = selector(
  (state: RootState) => state.language,
  language => language.lang as string,
);
