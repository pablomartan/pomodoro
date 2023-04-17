import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateTimer } from './app/timerSlice';

export const Timer = props => {
  const dispatch = useDispatch();
  const state = useSelector(stateTimer);
  
  return(
    <div id="timer" className="container col mb-4">
      <h4 className="text-center mb-3" id="timer-label">{state.timerLabel}</h4>
      <h3 className="text-center m-5" id="time-left">{props.timeLeft}</h3>
      <div className="row justify-content-center" id="timer-controls">
        <button
          id="start_stop"
          className="col col-md-3 text-center btn m-1 shadow-sm"
          onClick={() => props.startStopHandler(state, dispatch)}>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-pause"></i>
        </button>
        <button
          id="reset" 
          className="col col-md-3 text-center btn m-1 shadow-sm"
          onClick={() => dispatch(props.reset())}>
            <i className="fa-solid fa-repeat"></i>
        </button>
      </div>
    </div>
  )
};
