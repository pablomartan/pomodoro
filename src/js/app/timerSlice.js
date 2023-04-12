import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    brk: 5,
    session: 25,
    remaining: '25:00'
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
      state.remaining = '25:00';
    },
    countdown: state => {
      const min = Number(state.remaining.split(':')[0]);
      const sec = Number(state.remaining.split(':')[1]);
      if (min > 0 || sec > 0) {
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
    }
  }
});

export const stateTimer = state => state.timer;

export const { countdown, breakInc, breakDec, sessionInc, sessionDec, reset} = timerSlice.actions;

export default timerSlice.reducer;
