import { useEffect, useState } from "react";
import axios from "axios";
import { searchMovie } from "../apis/omdb";

const useMovies = (search) => {
  const [movieList, setMovieList] = useState([]);

  const downloadMovies = async (searchTerm) => {
    try {
      const url = searchMovie(searchTerm);
      const response = await axios.get(url);
      const movies = response.data.Search || [];
      setMovieList(movies);
    } catch (error) {
      console.error("Error downloading movies:", error);
    }
  };

  useEffect(() => {
    if (search) {
      downloadMovies(search);
    }
  }, [search]); // Re-run when `search` changes

  return {
    movieList,
  };
};

export default useMovies;