import React, { useEffect } from "react";
import fetchMovies from "../API/API";

const Home = () => {
  useEffect(() => {
    fetchMovies("/trending/get-trending");
  }, []);
  return <div>Home</div>;
};

export default Home;
