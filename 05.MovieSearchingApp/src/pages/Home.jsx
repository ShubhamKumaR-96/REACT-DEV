import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";
import "./Home.css";
import { searchMovie } from "../apis/omdb";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const downloadMovies = async (...args) => {
    const urls=args.map((name)=>searchMovie(name))
    const response = await axios.all(urls.map(url=>axios.get(url) )) ;
    const movies=response.map((movieResponse)=>movieResponse.data.Search)
    console.log(movies)
    setMovieList([].concat(...movies))
    console.log([].concat(...movies))
  };

  useEffect(() => {
    downloadMovies('harry','avengers');
  }, []);

  return (
    <div className="movie-card-wrapper">
     {
      movieList.map((movie)=>(
        <MovieCard key={movie.imdbID} {...movie} />
      ))
     }
    </div>
  );
};

export default Home;
