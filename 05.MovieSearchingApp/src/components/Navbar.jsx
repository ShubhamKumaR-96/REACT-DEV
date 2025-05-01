import React, { useState } from "react";
import "./Navbar.css";
import useMovies from "../hooks/useMovies";

const Navbar = () => {
  const [isAutoComplete, setIsAutoComplete] = useState(false);
  const [search, setSearch] = useState("");

  const {movieList}=useMovies(search)
  console.log("rendering")

  return (
    <div className="navbar-wrapper">
      <div>Movie App▶️ </div>
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
            setSearch('')
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
            <div key={moviesnames.imdbID} className="autoComplete-result">
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
