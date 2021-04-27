import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
	name: 'lang',
	initialState: {
		value: 'ru'
	},
	reducers: {
		changeLang: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
