import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainReducer from '../reducers'
import favouriteReducer from '../reducers/favourite'

const bigReducer = combineReducers({
  favourites: favouriteReducer,
})
const store = configureStore({
  reducer: mainReducer,
})

export default store;
