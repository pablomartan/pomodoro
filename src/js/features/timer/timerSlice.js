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
      const newMin = newTime.getMinutes();
      let newSec = newTime.getSeconds();
      if (newSec < 10) {
        newSec = `0${newSec}`;
      } else {
        newSec = String(newSec);
      }
      state.remaining = `${newMin}:${newSec}`;
    }
  },
  extraReducers: {
    'length/sessionInc': state => {
      const min = state.remaining.split(':')[0];
      const newLength = Number(min) + 1;
      state.remaining = `${newLength}:00`;
    },
    'length/sessionDec': state => {
      const min = state.remaining.split(':')[0];
      const newLength = Number(min) - 1;
      state.remaining = `${newLength}:00`;
    },
    'length/reset': state => {
      state.remaining = '25:00';
    }
  }
});

export const stateTimer = state => state.timer;

export const { countdown } = timerSlice.actions;

export default timerSlice.reducer;
