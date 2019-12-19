import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_SEARCH_MOVIE,
  CHANGE_CURRENT_MOVIE
} from "./movieTypes";

import { movies } from "../../../tempdata";

const initialState = {
  movies: [],
  searchMovie: "",
  searchType: "title",
  sortType: "year",
  currentMovie: null
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT_TYPE:
      console.log(action.payload);
      return {
        ...state,
        sortType: action.payload
      };

    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload
      };

    case CHANGE_SEARCH_MOVIE:
      console.log(action.payload);
      const searchType = state.searchType;
      const searchMovie = action.payload;

      const filteredMovies = movies.filter(movie => {
        if (searchType === "title") {
          return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
        }
        return movie.genres.some(movieGenre => {
          return movieGenre.toLowerCase().includes(searchMovie.toLowerCase());
        });
      });

      const sortedMovies = filteredMovies.sort((a, b) => {
        return a[state.sortType] < b[state.sortType] ? -1 : 1;
      });

      return {
        ...state,
        searchMovie,
        movies: sortedMovies
      };

    case CHANGE_CURRENT_MOVIE:
      const movieId = action.payload;
      const currentMovie = movies.find(movie => {
        return movie.id === movieId;
      });

      return {
        ...state,
        currentMovie
      };

    default:
      return state;
  }
};

export default movieReducer;
