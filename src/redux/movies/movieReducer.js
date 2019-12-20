import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_SEARCH_MOVIE,
  CHANGE_CURRENT_MOVIE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./movieTypes";

const initialState = {
  movies: [],
  searchMovie: "",
  searchType: "title",
  sortType: "release_date",
  currentMovie: null,
  error: "",
  loading: false
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT_TYPE:
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
      return {
        ...state,
        searchMovie: action.payload
      };

    case CHANGE_CURRENT_MOVIE:
      const movieId = action.payload;
      const currentMovie = state.movies.find(movie => {
        return movie.id === movieId;
      });
      return {
        ...state,
        currentMovie
      };

    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_MOVIES_SUCCESS:
      const movies = action.payload;
      const sortedMovies = movies.sort((a, b) => {
        return a[state.sortType] < b[state.sortType] ? -1 : 1;
      });

      return {
        ...state,
        loading: false,
        movies: sortedMovies,
        error: ""
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default movieReducer;
