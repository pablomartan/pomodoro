import React from 'react';
import { useDispatch } from 'react-redux';

export const Timer = props => {
  const dispatch = useDispatch();

  return(
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{props.remaining}</div>
      <div className="controls" id="timer-controls">
        <div id="start_stop" onClick={() => dispatch(props.startStop())}>Start-Stop</div>
        <div id="reset" onClick={() => dispatch(props.reset())}>Reset</div>
      </div>
    </>
  )
};
