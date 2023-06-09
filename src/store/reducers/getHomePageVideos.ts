import { parseData } from './../../utils/parseData';
import axios from 'axios';
import { RootState } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { YOUTUBE_API_URL } from '../../utils/constants';
import { HomePageVideos } from '../../utils/Types/Types';

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  'youtubeApp/homePageVideos',
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ''
      }`
    );
    if (!parseData) return;
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
