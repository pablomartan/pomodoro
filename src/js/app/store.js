import { configureStore } from '@reduxjs/toolkit';
import lengthReducer from '../features/lengthControl/lengthControlSlice';

export const store = configureStore({
  reducer: {
    length: lengthReducer,
  }
});
