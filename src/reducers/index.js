import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import searchResultsReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  searchResults: searchResultsReducer,
});

export default rootReducer;