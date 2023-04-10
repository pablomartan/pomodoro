import React from 'react';
import { LengthControl } from './features/lengthControl/LengthControl'

export const App = () => {
  return(
    <>
      <div id="app">
        <LengthControl name="break" value="5" />
        <LengthControl name="session" value="25" />
      </div>
    </>
  )
};
