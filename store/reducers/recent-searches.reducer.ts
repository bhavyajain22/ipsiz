import {Reducer} from 'redux';
import {
  ADD_RECENT_SEARCH,
  REBUILD_RECENT_SEARCHES,
} from '../types/recent-searches.types';

export type recentSearchesReducerState = {
  recentSearches: string[];
};

const initialState: recentSearchesReducerState = {
  recentSearches: [],
};

const RecentSearchesReducer: Reducer<recentSearchesReducerState> = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case REBUILD_RECENT_SEARCHES:
      return {...state, recentSearches: action.payload};
    case ADD_RECENT_SEARCH:
      return {
        ...state,
        recentSearches: [action.payload, ...state.recentSearches],
      };
    default:
      return state;
  }
};

export default RecentSearchesReducer;
