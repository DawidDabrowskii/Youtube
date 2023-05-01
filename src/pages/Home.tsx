import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { HomePageVideos } from '../utils/Types/Types';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { clearVideos } from '../store';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector(state => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

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
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}>
            <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;
