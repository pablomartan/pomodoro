import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    length: state => {
      return {
        break: 5,
        session: 25
      }
    }
  }
});
