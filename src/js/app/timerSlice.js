import { createSlice } from '@reduxjs/toolkit';

/**
 * @description: adds a zero to a number which has only one digit
 * @param {Number} num: the number
 * @returns {String}: a string with the 'padded' number
 */
const addZero = num => {
  return num < 10 && num >= 0 ? `0${num}` : `${num}`;
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    brk: 5,
    session: 25,
    timerLabel: 'Session',
    remaining: '25:00',
    intervalId: null
  },
  reducers: {
    breakInc: state => {
      if (state.brk < 60) {
        state.brk += 1;
      }
    },
    breakDec: state => {
      if (state.brk > 1) {
        state.brk -= 1;
      }
    },
    sessionInc: state => {
      if (state.session < 60) {
        state.session += 1;
      }
      state.remaining = state.session < 10 ? `0${state.session}:00` : `${state.session}:00`;
    },
    sessionDec: state => {
      if (state.session > 1) {
        state.session -= 1;
      }
      state.remaining = state.session < 10 ? `0${state.session}:00` : `${state.session}:00`;
    },
    reset: state => {
      state.brk = 5;
      state.session = 25;
      state.timerLabel = 'Session';
      state.remaining = '25:00';
      document.getElementById('beep').pause();
      document.getElementById('beep').currentTime = 0;
    },
    countdown: state => {
      const timeLeft = state.remaining.split(':');
      const nextTime = Number(timeLeft[0]) * 60 + Number(timeLeft[1]) - 1;
      const nextState =  addZero(Math.floor(nextTime / 60)) + ':' + addZero(nextTime % 60);

      if (nextTime >= 0) {
        state.remaining = nextState;
      } else {
        clearInterval(state.intervalId);
        document.getElementById('beep').play();
        state.timerLabel = state.timerLabel == 'Break' ? 'Session' : 'Break';
        if (state.timerLabel == 'Break') {
          state.remaining = addZero(state.brk) + ':00';
        } else {
          state.remaining = addZero(state.session) + ':00';
        }
      }
    },
    intervalToState: (state, action) => {
      state.intervalId = action.payload;
    }
  }
});

export const stateTimer = state => state.timer;

export const { countdown, breakInc, breakDec, sessionInc, sessionDec, reset, intervalToState } = timerSlice.actions;

export default timerSlice.reducer;
