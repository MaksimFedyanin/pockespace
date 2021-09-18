import { combineReducers } from '@reduxjs/toolkit';
import App from './app-slice';
import Feed from './feed-slice';

const appReducer = combineReducers({
  app: App,
    feed: Feed,
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
