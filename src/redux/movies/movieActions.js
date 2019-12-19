import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_SEARCH_MOVIE,
  CHANGE_CURRENT_MOVIE
} from "./movieTypes";

export const changeSortType = sortType => {
  return {
    type: CHANGE_SORT_TYPE,
    payload: sortType
  };
};

export const changeSearchType = searchType => {
  return {
    type: CHANGE_SEARCH_TYPE,
    payload: searchType
  };
};

export const changeSearchMovie = searchMovie => {
  return {
    type: CHANGE_SEARCH_MOVIE,
    payload: searchMovie
  };
};

export const changeCurrentMovie = movieId => {
  return {
    type: CHANGE_CURRENT_MOVIE,
    payload: movieId
  };
};
