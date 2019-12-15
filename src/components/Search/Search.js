import React from "react";

import { Toggler } from "../Shared/Toggler/Toggler";
import "./Search.scss";

export const Search = ({ changeSearchType, changeSearchMovie }) => {
  return (
    <div className="search-wrapper">
      <h2 className="search-title">Find Your Movie</h2>
      <form
        className="search-movie-form"
        action="/search"
        onSubmit={changeSearchMovie}
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
};
