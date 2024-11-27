import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progressJobs: {}, // Stores all progress job data
};

export const progressJobSlice = createSlice({
  name: 'progressJob',
  initialState,
  reducers: {
    setProgressJobs(state, action) {
      state.progressJobs = action.payload;
    },
    clearProgressJobs(state) {
      state.progressJobs = {};
    },
  },
});

export const { setProgressJobs, clearProgressJobs } = progressJobSlice.actions;

export default progressJobSlice.reducer;
