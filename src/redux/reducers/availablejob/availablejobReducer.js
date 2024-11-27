import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  availablejob: {},
};

export const availablejobSlice = createSlice({
  name: 'availablejob',
  initialState,
  reducers: {

  },

});

export const {  } = availablejobSlice.actions;

export default availablejobSlice.reducer;