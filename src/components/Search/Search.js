import React from "react";
import { connect } from "react-redux";

import { Toggler } from "../Shared/Toggler/Toggler";
import "./Search.scss";
import { changeSearchType, changeSearchMovie } from "../../redux/movies";

const mapDispatchToProps = dispatch => ({
  changeSearchMovie: searchQuery => dispatch(changeSearchMovie(searchQuery)),
  changeSearchType: ({ target: { value } }) => dispatch(changeSearchType(value))
});

export const Search = connect(
  null,
  mapDispatchToProps
)(({ changeSearchType, changeSearchMovie }) => {
  const parseQuery = ({ target }) => {
    event.preventDefault();
    const searchMovie = new FormData(target).get("searchMovie");
    changeSearchMovie(searchMovie);
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
      />
    </div>
  );
});
