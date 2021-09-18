import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: { url: string } = {
  url: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setUrl(state, { payload }) {
      state.url = payload;
    },
  },
});

export const APP_ACTIONS = appSlice.actions;
export default appSlice.reducer;
