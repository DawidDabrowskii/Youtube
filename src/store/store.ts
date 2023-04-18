import { YoutubeSlice } from './reducers/YoutubeApp';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
