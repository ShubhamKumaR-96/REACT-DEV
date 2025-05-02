import MovieCard from "../components/MovieCard/MovieCard";
import useMovies from "../hooks/useMovies";
import "./Home.css";

const Home = () => {
  const { movieList } = useMovies( "avengers");

  return (
    <div className="movie-card-wrapper">
      {movieList && movieList.length > 0 ? (
        movieList.map((movie) => <MovieCard key={movie.imdbID} id={movie.imdbID} {...movie} />)
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default Home;
