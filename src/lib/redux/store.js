import { configureStore } from '@reduxjs/toolkit';
import codeReducer from './codeSlice';
import problemReducer from './problemSlice';

export const store = configureStore({
  reducer: {
    code: codeReducer,
    problem:problemReducer,
  },
});

