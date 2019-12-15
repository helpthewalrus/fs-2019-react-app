import React, { Component } from "react";

import { movies } from "../../tempdata";
import { Header, ControlBar, MoviesList, Search, Footer } from "./index";
import "../assets/header-background.jpg";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchMovie: "",
      searchType: "title",
      sortType: "year"
    };
  }

  onChangeSearchType(event) {
    const searchType = event.target.value;
    this.setState({ ...this.state, searchType });
  }

  onChangeSearchMovie({ target }) {
    const searchMovie = new FormData(target).get("searchMovie");
    event.preventDefault();
    const movies = this.filterMovies(searchMovie);
    this.setState({ ...this.state, searchMovie, movies });
  }

  onChangeSortType(event) {
    const sortType = event.target.value;
    this.setState({ ...this.state, sortType });
  }

  filterMovies(searchMovie) {
    const { searchType } = this.state;
    return movies.filter(movie => {
      if (searchType === "title") {
        return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
      }
      return movie.genres.some(movieGenre => {
        return movieGenre.toLowerCase().includes(searchMovie.toLowerCase());
      });
    });
  }

  render() {
    return (
      <div className="app-central-wrapper">
        <div className="app-upper-container">
          <Header />
          <Search
            changeSearchType={event => this.onChangeSearchType(event)}
            changeSearchMovie={event => this.onChangeSearchMovie(event)}
          />
        </div>
        <main>
          <ControlBar
            changeSortType={event => this.onChangeSortType(event)}
            moviesCount={this.state.movies.length}
          />
          <MoviesList
            movies={this.state.movies}
            sortType={this.state.sortType}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
