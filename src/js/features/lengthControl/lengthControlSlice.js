import { createSlice } from '@reduxjs/toolkit';

export const lengthControlSlice = createSlice({
  name: 'length',
  initialState: {
    brk: 5,
    session: 25,
  },
  reducers: {
    breakInc: state => {
      state.brk += 1;
    },
    breakDec: state => {
      state.brk -= 1;
    },
    sessionInc: state => {
      state.session += 1;
    },
    sessionDec: state => {
      state.session -= 1;
    },
    reset: state => {
      state.brk = 5;
      state.session = 25;
    }
  }
});

export const stateLength = state => state.length;

export const { breakInc, breakDec, sessionInc, sessionDec, reset } = lengthControlSlice.actions;

export default lengthControlSlice.reducer;
