import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  completejob: {},
};

export const completejobSlice = createSlice({
  name: 'completejob',
  initialState,
  reducers: {

  },

});

export const {  } = completejobSlice.actions;

export default completejobSlice.reducer;