import DetailMovies from 'pages/DetailMovies';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<DetailMovies />} />
      </Routes>
    </div>
  );
}

export default App;
