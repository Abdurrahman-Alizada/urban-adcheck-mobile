import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hiddenJobs: {}, // Stores all hidden job data
};

export const hiddenJobSlice = createSlice({
  name: 'hiddenJob',
  initialState,
  reducers: {
    setHiddenJobs(state, action) {
      state.hiddenJobs = action.payload;
    },
    clearHiddenJobs(state) {
      state.hiddenJobs = {};
    },
  },
});

export const { setHiddenJobs, clearHiddenJobs } = hiddenJobSlice.actions;

export default hiddenJobSlice.reducer;
