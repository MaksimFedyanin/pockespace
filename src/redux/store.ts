import {configureStore} from '@reduxjs/toolkit';
import appReducer from "./appReducer";

export const initStore = (state) => {
    return configureStore({
        reducer: appReducer,
        preloadedState: state,
    });
};
