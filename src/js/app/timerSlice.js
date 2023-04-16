import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    breakLength: 5,
    sessionLenght: 25,
    timerLabel: 'Session',
    timeLeft: 25 * 60,
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
      state.timeLeft = state.sessionLenght * 60;
    },
    sessionDec: state => {
      if (state.sessionLenght> 1) {
        state.sessionLenght -= 1;
      }
      state.timeLeft = state.sessionLenght * 60;
    },
    reset: state => {
      clearInterval(state.intervalId);
      state.breakLength = 5;
      state.sessionLenght = 25;
      state.timerLabel = 'Session';
      state.timeLeft = 25 * 60;
      state.intervalId = null;
      state.intervalId = 
      document.getElementById('beep').pause();
      document.getElementById('beep').currentTime = 0;
    },
    countdown: state => {
      state.timeLeft = state.timeLeft - 1;
    },
    intervalToState: (state, action) => {
      clearInterval(state.intervalId);
      state.intervalId = action.payload;
    },
    switchMode: state => {
      state.isSwitching = !state.isSwitching;
      state.timerLabel = state.timerLabel == 'Session' ? 'Break' : 'Session';
      state.timeLeft = state.timerLabel == 'Session' ? state.sessionLenght * 60 : state.breakLength * 60;
    }
  }
});

export const stateTimer = state => state.timer;

export const { countdown, breakInc, breakDec, sessionInc, sessionDec, reset, intervalToState, switchMode } = timerSlice.actions;

export default timerSlice.reducer;
