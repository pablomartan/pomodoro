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

export const App = () => {
  const length = useSelector(stateLength);

  return(
    <>
      <div id="app">
        <LengthControl name="break" value={length.brk} inc={breakInc} dec={breakDec} />
        <LengthControl name="session" value={length.session} inc={sessionInc} dec={sessionDec} />
      </div>
    </>
  )
};
