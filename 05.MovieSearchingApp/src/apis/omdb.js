export const searchMovie = (name) => {
  return `https://www.omdbapi.com/?apiKey=${
    import.meta.env.VITE_API_KEY
  }&s=${name}`;
};

export const searchMovieById = (imdbID) => {
  return `https://www.omdbapi.com/?apiKey=${
    import.meta.env.VITE_API_KEY
  }&i=${imdbID}`;
};

