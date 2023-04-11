import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    remaining: '25:00'
  },
  reducers: {
    countdown: state => {
      const min = Number(state.remaining.split(':')[0]);
      const sec = Number(state.remaining.split(':')[1]);
      const currTime = Number(new Date(0, 0, 0, 0, min, sec));
      const newTime = new Date(currTime - 1000);
      state.remaining = `${newTime.getMinutes()}:${newTime.getSeconds()}`;
    }
  }
});

export const stateTimer = state => state.timer;

export const { countdown } = timerSlice.actions;

export default timerSlice.reducer;