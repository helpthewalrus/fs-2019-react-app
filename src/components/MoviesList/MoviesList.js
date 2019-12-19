import React from "react";
import { connect } from "react-redux";

import { MovieCard } from "./MovieCard/MovieCard";
import "./MoviesList.scss";

const mapStateToProps = state => ({
  movies: state.movies
});

export const MoviesList = connect(
  mapStateToProps,
  null
)(({ movies }) => {
  const resultMovies = movies => {
    if (movies.length) {
      return movies.map(movie => {
        return <MovieCard key={movie.id} {...movie} />;
      });
    }
    return (
      <li className="no-movies-found">
        <h2>No movies found</h2>
      </li>
    );
  };

  return <ul className="movies-cards-list">{resultMovies(movies)}</ul>;
});
