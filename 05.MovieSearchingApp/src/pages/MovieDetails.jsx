import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const downloadMovies = async () => {
    const response = await axios.get(searchMovieById(id));
    console.log(response.data);
    setMovie(response.data)
  };

  useEffect(() => {
    downloadMovies();
  }, []);

  return (<div>
    {movie && <MovieCard Title={movie.Title} Year={movie.Year} Type={movie.Type} Poster={movie.Poster}  />}
  </div>)
};

export default MovieDetails;
