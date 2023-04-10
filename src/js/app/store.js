import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    length: () => { console.log('length reducer placeholder') }
  }
});
