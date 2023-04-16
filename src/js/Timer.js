import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateTimer } from './app/timerSlice';

export const Timer = props => {
  const dispatch = useDispatch();
  const state = useSelector(stateTimer);
  
  return(
    <div id="timer" className="container col mt-4">
      <h3 className="text-center mb-3" id="timer-label">{state.timerLabel}</h3>
      <h4 className="text-center mb-3" id="time-left">{props.timeLeft}</h4>
      <div className="row" id="timer-controls">
        <div className="col col-md-3 text-center btn" id="start_stop" onClick={() => {
          props.startStopHandler(state, dispatch)
        }}>Start-Stop</div>
        <div className="col col-md-3 text-center btn" id="reset" onClick={() => {
          dispatch(props.reset());
        }}>
          Reset
        </div>
      </div>
    </div>
  )
};
