import * as types from "./movieTypes";
import movieReducer from "./movieReducer";

const initialState = {
  movies: [],
  searchMovie: "",
  searchType: "title",
  sortType: "release_date",
  currentMovie: null,
  error: "",
  loading: false
};

describe("movieReducer", () => {
  it("should return the initial state", () => {
    expect(movieReducer(undefined, {})).toEqual({
      movies: [],
      searchMovie: "",
      searchType: "title",
      sortType: "release_date",
      currentMovie: null,
      error: "",
      loading: false
    });
  });

  it("should handle CHANGE_SORT_TYPE", () => {
    expect(
      movieReducer(undefined, {
        type: types.CHANGE_SORT_TYPE,
        payload: "title"
      })
    ).toEqual({
      movies: [],
      searchMovie: "",
      searchType: "title",
      sortType: "title",
      currentMovie: null,
      error: "",
      loading: false
    });
  });

  it("should handle CHANGE_SEARCH_TYPE", () => {
    expect(
      movieReducer(undefined, {
        type: types.CHANGE_SEARCH_TYPE,
        payload: "genres"
      })
    ).toEqual({
      movies: [],
      searchMovie: "",
      searchType: "genres",
      sortType: "release_date",
      currentMovie: null,
      error: "",
      loading: false
    });
  });

  it("should handle CHANGE_SEARCH_MOVIE", () => {
    expect(
      movieReducer(undefined, {
        type: types.CHANGE_SEARCH_MOVIE,
        payload: "Titanic"
      })
    ).toEqual({
      movies: [],
      searchMovie: "Titanic",
      searchType: "title",
      sortType: "release_date",
      currentMovie: null,
      error: "",
      loading: false
    });
  });

  it("should handle CHANGE_CURRENT_MOVIE", () => {
    expect(
      movieReducer(undefined, {
        type: types.CHANGE_CURRENT_MOVIE,
        payload: {
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
        }
      })
    ).toEqual({
      movies: [],
      searchMovie: "",
      searchType: "title",
      sortType: "release_date",
      currentMovie: {
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
      },
      error: "",
      loading: false
    });
  });

  it("should handle FETCH_MOVIES_REQUEST", () => {
    expect(
      movieReducer(undefined, {
        type: types.FETCH_MOVIES_REQUEST
      })
    ).toEqual({
      movies: [],
      searchMovie: "",
      searchType: "title",
      sortType: "release_date",
      currentMovie: null,
      error: "",
      loading: true
    });
  });

  it("should handle FETCH_MOVIES_SUCCESS", () => {
    expect(
      movieReducer(undefined, {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: ["test1", "test2", "test3"]
      })
    ).toEqual({
      movies: ["test1", "test2", "test3"],
      searchMovie: "",
      searchType: "title",
      sortType: "release_date",
      currentMovie: null,
      error: "",
      loading: false
    });
  });

  it("should handle FETCH_MOVIES_FAILURE", () => {
    expect(
      movieReducer(undefined, {
        type: types.FETCH_MOVIES_FAILURE,
        payload: "ERROR OCCURED"
      })
    ).toEqual({
      movies: [],
      searchMovie: "",
      searchType: "title",
      sortType: "release_date",
      currentMovie: null,
      error: "ERROR OCCURED",
      loading: false
    });
  });
});
