import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import store from "../redux/movies/store";
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
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app-central-wrapper">
            <Switch>
              <div className="app-upper-container">
                <Link to="/">
                  <Header />
                </Link>
                <Route path="/" exact>
                  <Search />
                </Route>
                <Route path="/movie/:id">
                  <MovieInfo />
                </Route>
              </div>
            </Switch>
            <main>
              <ControlBar />
              <MoviesList />
            </main>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
