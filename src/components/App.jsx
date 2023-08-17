import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movieashana</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
