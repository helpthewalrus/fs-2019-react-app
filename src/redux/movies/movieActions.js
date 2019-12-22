import axios from "axios";

import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_SEARCH_MOVIE,
  CHANGE_CURRENT_MOVIE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./movieTypes";

export const changeSortType = sortType => {
  const sortTypeTransformed = sortType === "year" ? "release_date" : sortType;
  return {
    type: CHANGE_SORT_TYPE,
    payload: sortTypeTransformed
  };
};

export const changeSearchType = searchType => {
  const searchTypeTransformed = searchType === "genre" ? "genres" : searchType;
  return {
    type: CHANGE_SEARCH_TYPE,
    payload: searchTypeTransformed
  };
};

export const changeSearchMovie = searchMovie => {
  return {
    type: CHANGE_SEARCH_MOVIE,
    payload: searchMovie
  };
};

export const changeCurrentMovie = currentMovie => {
  return {
    type: CHANGE_CURRENT_MOVIE,
    payload: currentMovie
  };
};

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  };
};

export const fetchMoviesSuccess = movies => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  };
};

export const fetchMoviesFailure = error => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  };
};

export const fetchMovies = searchMovie => {
  return (dispatch, getState) => {
    dispatch(fetchMoviesRequest);
    const { searchType, sortType } = getState();
    axios
      .get(
        `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortType}&sortOrder=asc&search=${searchMovie}&searchBy=${searchType}&limit=9`
      )
      .then(({ data }) => {
        dispatch(fetchMoviesSuccess(data.data));
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.massage));
      });
  };
};
