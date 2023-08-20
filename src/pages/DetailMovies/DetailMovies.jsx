import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import fetchMovies from 'API/API';
import {
  MovieDetailsContainer,
  MoviePoster,
  AboutMovie,
  MovieTitle,
  UserScore,
  Overview,
  GenresContainer,
  Genre,
} from './DetailMovies.styled';

const DetailMovies = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchMovies(`movie/${moviesId}`);
        setMovie(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetails();
  }, [moviesId]);
  if (!movie) {
    return <div>Loading...</div>;
  }

  const userScore = Math.round(movie.vote_average * 10);

  return (
    <>
      <MovieDetailsContainer>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <AboutMovie>
          <MovieTitle>{movie.title || movie.name}</MovieTitle>
          <UserScore>User Score: {userScore}%</UserScore>
          <Overview>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </Overview>
          <GenresContainer>
            <h3>Genres</h3>
            {movie.genres.map(genre => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
          </GenresContainer>
        </AboutMovie>
      </MovieDetailsContainer>
      <div>
        <h3>Aditional information</h3>
        <ul>
          <li>
    
            <Link to={`/movies/${moviesId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${moviesId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default DetailMovies;
