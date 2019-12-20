import React from "react";
import { connect } from "react-redux";

import { Toggler } from "../Shared/Toggler/Toggler";
import "./Search.scss";
import {
  changeSearchType,
  changeSearchMovie,
  fetchMovies
} from "../../redux/movies";

const mapStateToProps = state => ({
  searchType: state.searchType
});

const mapDispatchToProps = dispatch => ({
  changeSearchMovie: searchQuery => dispatch(changeSearchMovie(searchQuery)),
  changeSearchType: ({ target: { value } }) =>
    dispatch(changeSearchType(value)),
  fetchMovies: searchMovie => dispatch(fetchMovies(searchMovie))
});

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ changeSearchType, changeSearchMovie, fetchMovies, searchType }) => {
  const parseQuery = ({ target }) => {
    event.preventDefault();
    const searchMovie = new FormData(target).get("searchMovie");
    changeSearchMovie(searchMovie);
    fetchMovies(searchMovie);
  };

  return (
    <div className="search-wrapper">
      <h2 className="search-title">Find Your Movie</h2>
      <form
        className="search-movie-form"
        action="/search"
        onSubmit={parseQuery}
        placeholder="Quentin Tarantino"
      >
        <input
          className="search-movie-info"
          type="text"
          name="searchMovie"
          placeholder="Quentin Tarantino"
        />
        <button className="search-movie-submit">Search</button>
      </form>
      <Toggler
        leftLabel="title"
        rightLabel="genre"
        title="searh by"
        onChangeCb={changeSearchType}
        selected={searchType === "genres" ? "genre" : searchType}
      />
    </div>
  );
});
