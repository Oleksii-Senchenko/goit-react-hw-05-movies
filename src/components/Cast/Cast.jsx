import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'API/API';

const Cast = () => {
  const { moviesId } = useParams();

  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovies(`movie/${moviesId}/credits`);
        setCredits(response.data.cast);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCast();
  }, [moviesId]);

  console.log(credits);

  return (
    <div>
      {credits.length > 0 && (
        <ul>
          {credits.map(credit => {
            return (
              <li key={credit.id}>
                <img
                  width="100px"
                  height="150px"
                  src={
                    credit.profile_path
                      ? `https://image.tmdb.org/t/p/original/${credit.profile_path}`
                      : '🥰'
                  }
                  alt={credit.name}
                />
                <h2>{credit.name}</h2>
                <p>{credit.character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {credits.length === 0 && <p>Sorry cast missed casts</p>}
    </div>
  );
};

export default Cast;
