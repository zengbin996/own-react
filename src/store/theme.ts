import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};

export const counterSlice = createSlice({
  name: 'theme',
  initialState: {
    current: 'auto',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { changeTheme } = counterSlice.actions;
export const THEME_OPTION = [
  {
    key: 'auto',
    value: '自动',
  },
  {
    key: 'dark',
    value: '深色',
  },
  {
    key: 'light',
    value: '浅色',
  },
];

export default persistReducer(persistConfig, counterSlice.reducer);
