import React from 'react';
import { useSelector } from 'react-redux';
import {
  breakInc,
  breakDec,
  sessionInc,
  sessionDec,
  reset,
  stateTimer
} from './app/timerSlice';
import { LengthControl } from './LengthControl';
import { Timer } from './Timer';

export const App = () => {
  const length = useSelector(stateTimer);

  return(
    <>
      <div id="app">
        <LengthControl name="break" value={length.brk} inc={breakInc} dec={breakDec} />
        <LengthControl name="session" value={length.session} inc={sessionInc} dec={sessionDec} />
        <Timer reset={reset} />
      </div>
    </>
  )
};
