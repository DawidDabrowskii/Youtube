import { InitialState } from '../utils/Types/Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHomePageVideos } from './reducers/getHomePageVideos';

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: '',
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

export const YoutubeSlice = createSlice({
  name: 'youtubeApp',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
  },
});
