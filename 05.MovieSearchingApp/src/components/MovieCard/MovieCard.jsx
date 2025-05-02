import React from "react";
import './MovieCard.css'
import { useNavigate } from "react-router-dom";

const MovieCard = ({ Title, Year, Type, Poster,id }) => {
  const navigate=useNavigate()

  function handleClick(){
    navigate(`/movie/${id}`)
  }

  return (
    <div onClick={handleClick} className="movie-wrapper">
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
