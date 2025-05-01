import { useEffect, useState } from "react";
import axios from "axios";
import { searchMovie } from "../apis/omdb";
import useDebounce from "./useDebounce";

const useMovies = (search) => {
  const [movieList, setMovieList] = useState([]);

  const debounceSearch=useDebounce(search,300)

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
    if (debounceSearch && debounceSearch.length >=2) {
      downloadMovies(debounceSearch);
    }else{
        downloadMovies("harry");
    }
   
  }, [debounceSearch]); // Re-run when `search` changes

  return {
    movieList,
  };
};

export default useMovies;