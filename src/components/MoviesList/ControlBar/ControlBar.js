import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Toggler } from "../../Shared/Toggler/Toggler";
import "./ControlBar.scss";
import {
  changeSortType,
  changeSearchMovie,
  fetchMovies
} from "../../../redux/movies";

const mapStateToProps = state => ({
  sortType: state.sortType,
  searchMovie: state.searchMovie,
  moviesCount: state.movies.length,
  currentMovie: state.currentMovie
});

const mapDispatchToProps = dispatch => ({
  changeSortType: sortType => dispatch(changeSortType(sortType)),
  changeSearchMovie: searchMovie => dispatch(changeSearchMovie(searchMovie)),
  fetchMovies: searchMovie => dispatch(fetchMovies(searchMovie))
});

export const ControlBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    changeSortType,
    changeSearchMovie,
    fetchMovies,
    sortType,
    searchMovie,
    moviesCount,
    currentMovie
  }) => {
    const sortChangeHandler = event => {
      changeSortType(event.target.value);
      changeSearchMovie(searchMovie);
      fetchMovies(searchMovie);
    };

    return (
      <Switch>
        <Route path={["/", "/search"]} exact>
          <div className="sort-wrapper">
            <p className="additional-info">
              {`${moviesCount} movie${moviesCount === 1 ? "" : "s"} found`}
            </p>
            <Toggler
              leftLabel="year"
              rightLabel="title"
              title="sort by"
              onChangeCb={sortChangeHandler}
              selected={sortType === "release_date" ? "year" : sortType}
            />
          </div>
        </Route>
        <Route path="/movie/:id">
          <div className="sort-wrapper">
            <p className="additional-info">{`Films by ${
              currentMovie ? currentMovie.genres[0] : null
            } genre`}</p>
          </div>
        </Route>
      </Switch>
    );
  }
);
