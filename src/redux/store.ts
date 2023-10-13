import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './tasksSlice.ts';

const store = configureStore({
  reducer: { tasks },
});

export default store;
