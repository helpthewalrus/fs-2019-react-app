import React from "react";
import { connect } from "react-redux";

import "./MovieInfo.scss";

const mapStateToProps = state => ({ currentMovie: state.currentMovie });

export const MovieInfo = connect(
  mapStateToProps,
  null
)(({ currentMovie }) => {
  const {
    id,
    title,
    release_date,
    runtime,
    genres,
    overview,
    poster_path,
    vote_average
  } = currentMovie;
  return (
    <div className="movie-info__wrapper">
      <img className="movie-info__image" src={poster_path} />
      <div className="movie-info">
        <div className="movie-info__title-wrapper">
          <h2 className="movie-info__title">{title}</h2>
          <p className="movie-info__rate">{vote_average}</p>
        </div>

        <p className="movie-info__genres">
          {genres.map(genre => {
            return (
              <span className="movie-info__genre" key={genre}>
                {genre}
              </span>
            );
          })}
        </p>

        <div className="movie-info__year-wrapper">
          <p className="movie-info__year-item movie-info__year">
            {release_date.split("-")[0]}
            <span>year</span>
          </p>
          <p className="movie-info__year-item movie-info__runtime">
            {runtime}
            <span>min</span>
          </p>
        </div>

        <p className="movie-info__plot">{overview}</p>
      </div>
    </div>
  );
});
