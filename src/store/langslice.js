import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    value: 'en',
  },
  reducers: {
    changeLang: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value.push(action.payload);

      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
