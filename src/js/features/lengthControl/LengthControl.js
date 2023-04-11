import React from 'react';
import { useDispatch } from 'react-redux';

export const LengthControl = props => {
  // TODO: controls for increment and decrement
  const labelId = props.name + '-label';
  const incrementId = props.name + '-increment';
  const decrementId = props.name + '-decrement';
  const lengthId = props.name + '-length';
  const dispatch = useDispatch();
  
  return(
    <div className="length-control" id={props.id}>
      <h3 className="control-label text-capitalize" id={labelId}>{props.name} length</h3>
      <div className="controls">
        <button id={decrementId} onClick={() => dispatch(props.dec())}>↓</button>
        <h4 className="control-value" id={lengthId}>{props.value}</h4>
        <button id={incrementId} onClick={() => dispatch(props.inc())}>↑</button>
      </div>
    </div>
  )
};
