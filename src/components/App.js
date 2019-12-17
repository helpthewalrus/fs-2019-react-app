import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { movies } from "../../tempdata";
import {
  Header,
  ControlBar,
  MoviesList,
  Search,
  Footer,
  MovieInfo
} from "./index";

import "../assets/header-background.jpg";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchMovie: "",
      searchType: "title",
      sortType: "year",
      currentMovie: null
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

  onChooseCurrentMovie(event) {
    const currentMovie = movies.find(movie => {
      return movie.id === +event;
    });
    this.setState({ ...this.state, currentMovie });
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
      <Router>
        <div className="app-central-wrapper">
          <Switch>
            <div className="app-upper-container">
              <Link to="/">
                <Header />
              </Link>
              <Route path="/" exact>
                <Search
                  changeSearchType={event => this.onChangeSearchType(event)}
                  changeSearchMovie={event => this.onChangeSearchMovie(event)}
                />
              </Route>
              <Route path="/movie/:id">
                <MovieInfo {...this.state.currentMovie} />
              </Route>
            </div>
          </Switch>
          <main>
            <ControlBar
              changeSortType={event => this.onChangeSortType(event)}
              moviesCount={this.state.movies.length}
            />
            <MoviesList
              movies={this.state.movies}
              sortType={this.state.sortType}
              changeCurrentMovie={event => this.onChooseCurrentMovie(event)}
            />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
