import React, { useState } from "react";
import "./Navbar.css";
import useMovies from "../hooks/useMovies";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAutoComplete, setIsAutoComplete] = useState(false);
  const [search, setSearch] = useState("");
  const { movieList } = useMovies(search);
  const navigate = useNavigate();

  const handleAutoCompleteClick = (e, movieImdbID) => {
    console.log("onmouseDown", e.target);
    navigate(`/movie/${movieImdbID}`);
  };

  return (
    <div className="navbar-wrapper">
      <div className="movie-base-title">
        <Link to={"/"}>Movie App▶️ </Link>{" "}
      </div>
      <div className="search-bar">
        <input
          type="text"
          id="movie-search-input"
          placeholder="what movie you are thinking about..."
          onFocus={() => {
            setIsAutoComplete(true);
          }}
          onBlur={() => {
            setIsAutoComplete(false);
            setSearch("");
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <div
          id="result-list"
          style={{ display: isAutoComplete ? "block" : "none" }}
        >
          {movieList.map((moviesnames) => (
            <div
              key={moviesnames.imdbID}
              className="autoComplete-result"
              onMouseDown={(e) =>
                handleAutoCompleteClick(e, moviesnames.imdbID)
              }
            >
              {moviesnames.Title}
            </div>
          ))}
        </div>
      </div>
      <div>Theme</div>
    </div>
  );
};

export default Navbar;
