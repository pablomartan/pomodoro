import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateTimer, countdown } from './app/timerSlice';

let timer; 

const startStopDispatcher = (state, dispatch) => {
  if (!timer) {
    timer = setInterval(() => dispatch(countdown()), 1000);
  } else {
    clearInterval(timer);
    timer = null;
  }

};

export const Timer = props => {
  const dispatch = useDispatch();
  const state = useSelector(stateTimer);

  return(
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{state.remaining}</div>
      <div className="controls" id="timer-controls">
        <div id="start_stop" onClick={() => startStopDispatcher(state, dispatch)}>Start-Stop</div>
        <div id="reset" onClick={() => {
          if (timer) { clearInterval(timer) };
          dispatch(props.reset());
        }}>
          Reset
        </div>
      </div>
    </>
  )
};
