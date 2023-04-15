import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/watch/:id' element={<Watch />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
