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
    breakLength: 5,
    sessionLenght: 25,
    timerLabel: 'Session',
    remaining: '25:00',
    intervalId: null,
    isSwitching: false,
  },
  reducers: {
    breakInc: state => {
      if (state.breakLength < 60) {
        state.breakLength += 1;
      }
    },
    breakDec: state => {
      if (state.breakLength > 1) {
        state.breakLength -= 1;
      }
    },
    sessionInc: state => {
      if (state.sessionLenght < 60) {
        state.sessionLenght += 1;
      }
      state.remaining = state.sessionLenght < 10 ? `0${state.sessionLenght}:00` : `${state.sessionLenght}:00`;
    },
    sessionDec: state => {
      if (state.session > 1) {
        state.session -= 1;
      }
      state.remaining = state.sessionLenght < 10 ? `0${state.sessionLenght}:00` : `${state.sessionLenght}:00`;
    },
    reset: state => {
      clearInterval(state.intervalId);
      state.breakLength = 5;
      state.sessionLenght = 25;
      state.timerLabel = 'Session';
      state.remaining = '25:00';
      state.intervalId = null;
      state.intervalId = 
      document.getElementById('beep').pause();
      document.getElementById('beep').currentTime = 0;
    },
    countdown: state => {
      state.isSwitching = false;
      const timeLeft = state.remaining.split(':');
      const nextTime = Number(timeLeft[0]) * 60 + Number(timeLeft[1]) - 1;
      const nextState =  addZero(Math.floor(nextTime / 60)) + ':' + addZero(nextTime % 60);

      if (nextTime >= 0) {
        state.remaining = nextState;
      } else {
        clearInterval(state.intervalId);
        document.getElementById('beep').play();
        state.timerLabel = state.timerLabel == 'Break' ? 'Session' : 'Break';
        state.isSwitching = true;
        if (state.timerLabel == 'Break') {
          state.remaining = addZero(state.breakLength) + ':00';
        } else {
          state.remaining = addZero(state.sessionLenght) + ':00';
        }
        state.isSwitching = false;
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
