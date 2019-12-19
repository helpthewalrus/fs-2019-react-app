import { createStore } from "redux";
import movieReducer from "./movieReducer";

const store = createStore(movieReducer);

export default store;
