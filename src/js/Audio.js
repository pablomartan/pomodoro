import React from 'react';

export const Audio = props => {
  return(
    <audio id={props.id} src={props.url} />
  )
};
