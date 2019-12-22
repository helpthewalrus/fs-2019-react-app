import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Header,
  ControlBar,
  MoviesList,
  Search,
  Footer,
  MovieInfo,
  NotFound
} from "./index";

import { changeSearchMovie, fetchMovies } from "../redux/movies";

import "../assets/header-background.jpg";

const mapDispatchToProps = dispatch => ({
  changeSearchMovie: searchQuery => dispatch(changeSearchMovie(searchQuery)),
  fetchMovies: searchMovie => dispatch(fetchMovies(searchMovie))
});

class App extends Component {
  constructor({ changeSearchMovie, fetchMovies }) {
    super();
    this.changeSearchMovie = changeSearchMovie;
    this.fetchMovies = fetchMovies;
  }

  componentDidMount() {
    const searchQuery = location.search.slice(2);
    if (location.pathname === "/search" && searchQuery) {
      this.changeSearchMovie(searchQuery);
      this.fetchMovies(searchQuery);
    }
  }

  render() {
    return (
      <Router>
        <div className="app-central-wrapper">
          <Switch>
            <Route path={["/", "/search"]} exact>
              <div className="app-upper-container">
                <Header />
                <Search />
              </div>
              <main>
                <ControlBar />
                <MoviesList />
              </main>
            </Route>

            <Route path="/movie/:id">
              <div className="app-upper-container">
                <Link to="/">
                  <Header />
                </Link>
                <MovieInfo />
              </div>
              <main>
                <ControlBar />
                <MoviesList />
              </main>
            </Route>

            <Route>
              <main>
                <NotFound />
              </main>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
