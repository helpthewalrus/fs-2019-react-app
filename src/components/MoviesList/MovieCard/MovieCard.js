import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  changeCurrentMovie,
  changeSearchType,
  changeSortType,
  fetchMovies
} from "../../../redux/movies";
import "./MovieCard.scss";

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  changeCurrentMovie: currentMovie =>
    dispatch(changeCurrentMovie(currentMovie)),
  changeSearchType: searchType => dispatch(changeSearchType(searchType)),
  changeSortType: sortType => dispatch(changeSortType(sortType)),
  fetchMovies: searchMovie => dispatch(fetchMovies(searchMovie))
});

export const MovieCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    id,
    title,
    release_date,
    genres,
    poster_path,
    changeCurrentMovie,
    changeSearchType,
    changeSortType,
    fetchMovies,
    movies
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
        <li className="movie-card">
          <img
            className="movie-poster"
            src={poster_path}
            onClick={() => {
              changeCurrentMovie(movies.find(movie => movie.id === id));
              changeSearchType("genres");
              changeSortType("title");
              fetchMovies(genres[0]);
            }}
          />
          <div className="movie-info">
            <div>
              <h3 className="movie-title">{title}</h3>
              <p className="movie-genres">{genresList}</p>
            </div>
            <div>
              <p className="movie-year">{release_date.split("-")[0]}</p>
            </div>
          </div>
        </li>
      </Link>
    );
  }
);
