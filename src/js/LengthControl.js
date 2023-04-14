import React from 'react';
import { useDispatch } from 'react-redux';

export const LengthControl = props => {
  const labelId = props.name + '-label';
  const incrementId = props.name + '-increment';
  const decrementId = props.name + '-decrement';
  const lengthId = props.name + '-length';
  const dispatch = useDispatch();
  
  return(
    <div className="length-control col" id={props.id}>
      <h3 className="text-capitalize text-center" id={labelId}>{props.name} length</h3>
      <div className="row controls">
        <button className="col btn btn-primary" id={decrementId} onClick={() => dispatch(props.dec())}>↓</button>
        <h4 className="col text-center" id={lengthId}>{props.value}</h4>
        <button className="col btn btn-primary" id={incrementId} onClick={() => dispatch(props.inc())}>↑</button>
      </div>
    </div>
  )
};
