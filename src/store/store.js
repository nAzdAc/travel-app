import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langslice';
// import { counterReducer } from './rootReducer';

export const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});
