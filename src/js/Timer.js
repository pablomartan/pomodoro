import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateTimer, countdown, intervalToState } from './app/timerSlice';

const startStopDispatcher = (state, dispatch) => {
  if (!state.intervalId) {
    dispatch(intervalToState(setInterval(() => dispatch(countdown()), 1000)));
  } else {
    clearInterval(state.intervalId);
    dispatch(intervalToState(null));
  }
};

export const Timer = props => {
  const dispatch = useDispatch();
  const state = useSelector(stateTimer);

  return(
    <div id="timer" className="container col-5">
      <h3 className="text-center" id="timer-label">{state.timerLabel}</h3>
      <h4 className="text-center" id="time-left">{state.remaining}</h4>
      <div className="row" id="timer-controls">
        <div className="col text-center btn btn-warning" id="start_stop" onClick={() => startStopDispatcher(state, dispatch)}>Start-Stop</div>
        <div className="col text-center btn btn-danger" id="reset" onClick={() => {
          if (timer) { clearInterval(timer) };
          dispatch(props.reset());
        }}>
          Reset
        </div>
      </div>
    </div>
  )
};
