import React from 'react';
import { useDispatch } from 'react-redux';

export const LengthControl = props => {
  const labelId = props.name + '-label';
  const incrementId = props.name + '-increment';
  const decrementId = props.name + '-decrement';
  const lengthId = props.name + '-length';
  const dispatch = useDispatch();
  
  return(
    <div className="col col-lg-5 mt-2 m-md-2" id={props.id}>
      <p className="text-capitalize text-center" id={labelId}>{props.name}</p>
      <div className="row">
        <button className="col-3 col-md-4 btn shadow-sm my-buttons" id={decrementId} onClick={() => dispatch(props.dec())}>↓</button>
        <p className="col text-center m-auto" id={lengthId}>{props.value}</p>
        <button className="col-3 col-md-4 btn shadow-sm my-buttons" id={incrementId} onClick={() => dispatch(props.inc())}>↑</button>
      </div>
    </div>
  )
};
