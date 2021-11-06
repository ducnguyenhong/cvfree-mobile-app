import { createAsyncThunk } from '@reduxjs/toolkit';

const changeLanguage = createAsyncThunk(
  'change-language',
  (lang: 'vi' | 'en') => {
    return lang;
  },
);
