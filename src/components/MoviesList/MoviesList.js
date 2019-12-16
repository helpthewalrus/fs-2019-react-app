import React from "react";
import { MovieCard } from "./MovieCard/MovieCard";
import "./MoviesList.scss";

export const MoviesList = ({ movies, sortType, changeCurrentMovie }) => {
  const sortMovies = movies => {
    return movies.sort((a, b) => {
      return a[sortType] < b[sortType] ? -1 : 1;
    });
  };

  const resultMovies = movies => {
    if (movies.length) {
      return sortMovies(movies).map(movie => {
        return (
          <MovieCard
            key={movie.id}
            {...movie}
            onChangeCurrentMovie={changeCurrentMovie}
          />
        );
      });
    }
    return (
      <li className="no-movies-found">
        <h2>No movies found</h2>
      </li>
    );
  };

  return <ul className="movies-cards-list">{resultMovies(movies)}</ul>;
};
