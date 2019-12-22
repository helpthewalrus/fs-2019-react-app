import * as actions from "./movieActions";
import * as types from "./movieTypes";

describe("actions", () => {
  it("should create an action to change sort type to 'release_date'", () => {
    const sortType = "year";
    const expectedAction = {
      type: types.CHANGE_SORT_TYPE,
      payload: "release_date"
    };
    expect(actions.changeSortType(sortType)).toEqual(expectedAction);
  });

  it("should create an action to change sort type to 'title'", () => {
    const sortType = "title";
    const expectedAction = {
      type: types.CHANGE_SORT_TYPE,
      payload: sortType
    };
    expect(actions.changeSortType(sortType)).toEqual(expectedAction);
  });

  it("should create an action to change search type to 'genres'", () => {
    const searchType = "genre";
    const expectedAction = {
      type: types.CHANGE_SEARCH_TYPE,
      payload: "genres"
    };
    expect(actions.changeSearchType(searchType)).toEqual(expectedAction);
  });

  it("should create an action to change search type to 'title'", () => {
    const searchType = "title";
    const expectedAction = {
      type: types.CHANGE_SEARCH_TYPE,
      payload: searchType
    };
    expect(actions.changeSearchType(searchType)).toEqual(expectedAction);
  });

  it("should create an action to change search movie", () => {
    const searchMovie = "Titanic";
    const expectedAction = {
      type: types.CHANGE_SEARCH_MOVIE,
      payload: searchMovie
    };
    expect(actions.changeSearchMovie(searchMovie)).toEqual(expectedAction);
  });

  it("should create an action to change current movie data", () => {
    const currentMovie = {
      id: 223,
      title: "Rebecca",
      tagline: "The shadow of this woman darkened their love.",
      vote_average: 7.8,
      vote_count: 443,
      release_date: "1940-04-12",
      poster_path:
        "https://image.tmdb.org/t/p/w500/3Gla0nxHboX3nxQzaU4SoqOtTjh.jpg",
      overview: "Story of a young woman ...",
      budget: 1288000,
      revenue: 6000000,
      genres: ["Drama", "Mystery"],
      runtime: 130
    };
    const expectedAction = {
      type: types.CHANGE_CURRENT_MOVIE,
      payload: currentMovie
    };
    expect(actions.changeCurrentMovie(currentMovie)).toEqual(expectedAction);
  });

  it("should create an action to fetch movies request", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_REQUEST
    };
    expect(actions.fetchMoviesRequest()).toEqual(expectedAction);
  });

  it("should create an action to fetch movies success", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_SUCCESS
    };
    expect(actions.fetchMoviesSuccess()).toEqual(expectedAction);
  });

  it("should create an action to fetch movies failure", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_FAILURE
    };
    expect(actions.fetchMoviesFailure()).toEqual(expectedAction);
  });
});
