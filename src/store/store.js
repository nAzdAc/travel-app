import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './rootReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
