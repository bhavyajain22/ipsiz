import {combineReducers} from 'redux';

// REDUCERS
import AppReducer from './app.reducer';
import CategoryReducer from './category.reducer';
import FilteringReducer from './filtering.reducer';
import RecentSearchesReducer from './recent-searches.reducer';
import AuthReducer from './auth.reducer';

export const createRootReducer = combineReducers({
  AppReducer,
  CategoryReducer,
  FilteringReducer,
  RecentSearchesReducer,
  AuthReducer,
});

export type RootState = ReturnType<typeof createRootReducer>;
