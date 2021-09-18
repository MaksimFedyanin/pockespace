import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./appReducer";

export const initStore = () => {
    let state;

    if (typeof document !== 'undefined') {
        const reduxState =  document.getElementById('reduxState').attributes['content'].nodeValue;

        state = JSON.parse(atob(reduxState));
    } else {
        console.log(global.reduxState);

        state = JSON.parse(Buffer.from(global.reduxState, 'base64').toString('utf8'));
    }

    const store = configureStore({
        reducer: appReducer,
        preloadedState: state,
    });

    return store;
};
