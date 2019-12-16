import React from "react";
import { Link } from "react-router-dom";

import "./MovieCard.scss";

export const MovieCard = ({
  id,
  title,
  year,
  runtime,
  genres,
  director,
  posterUrl,
  onChangeCurrentMovie
}) => {
  const genresList = genres.map((genre, index) => {
    return index < genres.length - 1 ? (
      <span key={genre} className="movie-genre">
        {genre}
        {" & "}
      </span>
    ) : (
      <span key={genre} className="movie-genre">
        {genre}
      </span>
    );
  });

  return (
    <Link to={`/movie/${id}`}>
      <li className="movie-card" onClick={() => onChangeCurrentMovie(id)}>
        <img className="movie-poster" src={posterUrl} />
        <div className="movie-info">
          <div>
            <h3 className="movie-title">{title}</h3>
            <p className="movie-genres">{genresList}</p>
          </div>
          <div>
            <p className="movie-year">{year}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};
