import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  breakInc,
  breakDec,
  sessionInc,
  sessionDec,
  reset,
  countdown,
  intervalToState,
  switchMode,
  stateTimer
} from './app/timerSlice';
import { LengthControl } from './LengthControl';
import { Timer } from './Timer';
import { Audio } from './Audio';

/**
 * @description: takes a number of seconds and returns a string with mm:ss
 * format
 * @param {Number} seconds: the second count
 * @returns a String with mm:ss format
 */
const secondsToString = seconds => {
  let mins = Math.floor(seconds / 60);
  let sec = seconds % 60;
  mins = mins < 10 ? `0${mins}` : `${mins}`;
  sec = sec < 10 ? `0${sec}` : `${sec}`;
  return mins + ':' + sec;
};

/**
 * @description: handles the start and stop of the countdown
 * @param {Object} state: the state of the App; handled by redux
 * @param {Function} dispatch: the redux dispatch function
 */
const startStopHandler = (state, dispatch) => {
  if (!state.intervalId) {
    dispatch(intervalToState(setInterval(() => dispatch(countdown()), 1000)));
  } else {
    dispatch(intervalToState(null));
  }
};


export const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(stateTimer);
  
  if (state.timeLeft < 0) {
    document.getElementById('beep').play();
    dispatch(switchMode());
    dispatch(intervalToState(setInterval(() => {
      dispatch(countdown());
    }, 1000)));
  }

  return(
    <>
      <div id="app" className="card p-5 justify-self-center col-7">
        <div className="row" id="length-control">
          <LengthControl name="break" value={state.breakLength} inc={breakInc} dec={breakDec} />
          <LengthControl name="session" value={state.sessionLenght} inc={sessionInc} dec={sessionDec} />
        </div>
        <Timer reset={reset} timeLeft={secondsToString(state.timeLeft)} startStopHandler={startStopHandler}/>
        <Audio id="beep"
          url="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
      </div>
    </>
  )
};
