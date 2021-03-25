import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langslice';

export const store = configureStore({
	reducer: {
		lang: langReducer
	}
});
