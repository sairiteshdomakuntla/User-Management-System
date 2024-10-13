import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { loadStateFromCookies } from '../cookiesFile';

const preloadedState = loadStateFromCookies();

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  preloadedState: preloadedState ? { users: preloadedState } : undefined,
});

export default store;