import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  job: {},
};

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {

  },

});

export const {  } = jobSlice.actions;

export default jobSlice.reducer;