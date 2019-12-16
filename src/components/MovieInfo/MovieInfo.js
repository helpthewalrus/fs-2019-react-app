import React from "react";

import "./MovieInfo.scss";

export const MovieInfo = ({
  id,
  title,
  year,
  runtime,
  genres,
  plot,
  director,
  posterUrl
}) => {
  return (
    <div className="movieInfo">
      <p>{id}</p>
      <p>{title}</p>
      <p>{year}</p>
      <p>{runtime}</p>
      <p>
        {genres.map(genre => {
          return <span key={genre}>{genre}</span>;
        })}
      </p>
      <p>{plot}</p>
      <p>{director}</p>
      <p>{posterUrl}</p>
    </div>
  );
};
