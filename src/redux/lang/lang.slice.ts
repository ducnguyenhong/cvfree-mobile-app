import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LangType = 'vi' | 'en';

export interface LangState {
  lang: LangType;
}

const initialState: LangState = {
  lang: 'vi',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<{ lang: LangType }>) => {
      state.lang = action.payload.lang;
    },
  },
});

export const { changeLanguage } = langSlice.actions;
