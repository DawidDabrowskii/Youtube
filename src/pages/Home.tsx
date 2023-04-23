import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import InfiniteScroll from '../components/InfiniteScroll';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector(state => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);
  return (
    <div className='max-h-screen overflow-hidden'>
      <div className='h-[7.5vh]'>
        <Navbar />
      </div>
      <div className='flex h-[92.5vh]'>
        <Sidebar />
        {/* {videos.length > 0 ? <InfiniteScroll /> : <Spinner />} */}
        <Spinner />
      </div>
    </div>
  );
};

export default Home;
