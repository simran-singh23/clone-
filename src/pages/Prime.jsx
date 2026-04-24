import React, { useEffect, useState } from "react";

const API_KEY = "75cabb01cee6a6509fa8e194f01a76f8"; 
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const Prime = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())

      .then((data) => setMovies(data.results))
      
      .catch((err) => console.log(err.   aa ));
  }, []);

  return (
    <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="shadow-lg p-3 rounded-xl">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}

            alt={movie.title}
            className="rounded-lg"
          />
          <h3 className="mt-2 font-bold">{movie.title}</h3>
          
          <p className="text-sm text-gray-500">
            ⭐ {movie.vote_average}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Prime;