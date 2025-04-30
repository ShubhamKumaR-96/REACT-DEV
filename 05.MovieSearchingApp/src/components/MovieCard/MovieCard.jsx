import React from "react";
import './MovieCard.css'

const MovieCard = ({ Title, Year, Type, Poster }) => {
  return (
    <div className="movie-wrapper">
      <div className="movie-image">
        <img src={Poster} alt="image" />
      </div>
      <div className="movie-title">
        <span> {Title}</span>
      </div>

      <div className="movie-year">
        <span>{Year}</span>
      </div>
      <div className="movie-type">
        <span>{Type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
