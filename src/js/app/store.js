import { configureStore } from '@reduxjs/toolkit';
import lengthReducer from '../features/lengthControl/lengthControlSlice';
import timerReducer from '../features/timer/timerSlice';

export const store = configureStore({
  reducer: {
    length: lengthReducer,
    timer: timerReducer
  }
});
