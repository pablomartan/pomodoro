import React from 'react';
import { useSelector } from 'react-redux';
import { LengthControl } from './features/lengthControl/LengthControl';
import {
  breakInc,
  breakDec,
  sessionInc,
  sessionDec,
  reset,
  stateLength
} from './features/lengthControl/lengthControlSlice';
import { Timer } from './features/timer/Timer';
import {
  stateTimer 
} from './features/timer/timerSlice';

export const App = () => {
  const length = useSelector(stateLength);
  const timer = useSelector(stateTimer);

  return(
    <>
      <div id="app">
        <LengthControl name="break" value={length.brk} inc={breakInc} dec={breakDec} />
        <LengthControl name="session" value={length.session} inc={sessionInc} dec={sessionDec} />
        <Timer />
      </div>
    </>
  )
};
