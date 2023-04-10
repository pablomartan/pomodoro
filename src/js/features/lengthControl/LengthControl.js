import React from 'react';

export const LengthControl = props => {
  // TODO: controls for increment and decrement
  const labelId = props.name + '-label';
  const incrementId = props.name + '-increment';
  const decrementId = props.name + '-decrement';
  const lengthId = props.name + '-length';
  
  return(
    <div className="length-control" id={props.id}>
      <h3 className="control-label text-capitalize" id={labelId}>{props.name} length</h3>
      <div className="controls">
        <div id={decrementId} />
        <div id={incrementId} />
        <h4 className="control-value" id={lengthId}>{props.value}</h4>
      </div>
    </div>
  )
};
