import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";
import "./MovieDetails.css";
import MovieCard from "../components/MovieCard/MovieCard";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const downloadMovies = async () => {
    const response = await axios.get(searchMovieById(id));
    setMovie(response.data);
  };

  useEffect(() => {
    downloadMovies();
  }, [id]);

  return (
    <div className="movie-details-wrapper">
      {movie && (
        <MovieCard
          Title={movie.Title}
          Year={movie.Year}
          Type={movie.Type}
          Poster={movie.Poster}
          id={movie.imdbID}
        />
      )}

      {movie && <div className="movie-details">
        <div>
          Plot : {movie.Plot}
        </div>
        <div>
          Actors : {movie.Actors}
        </div>
        <div>
          Genre: {movie.Genre.split(',').map((genre)=>{
            return <span className="genre" key={genre}>{genre}</span>
          })}
        </div>
        </div>}
    </div>
  );
};

export default MovieDetails;
