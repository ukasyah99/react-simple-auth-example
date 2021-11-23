import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth';

const store = configureStore({
  reducer: combineReducers({
    auth,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
