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
import { Audio } from './Audio';

export const App = () => {
  const length = useSelector(stateTimer);

  return(
    <>
      <div id="app" className="card p-5 justify-self-center col-7">
        <div className="row" id="length-control">
          <LengthControl name="break" value={length.breakLength} inc={breakInc} dec={breakDec} />
          <LengthControl name="session" value={length.sessionLenght} inc={sessionInc} dec={sessionDec} />
        </div>
        <Timer reset={reset} />
        <Audio id="beep"
          url="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
      </div>
    </>
  )
};
