import DetailMovies from 'pages/DetailMovies/DetailMovies';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Layout from './Layout';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<DetailMovies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
