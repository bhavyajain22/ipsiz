import AsyncStorage from '@react-native-community/async-storage';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../reducers';
import {
  ADD_RECENT_SEARCH,
  REBUILD_RECENT_SEARCHES,
} from '../types/recent-searches.types';

export const rebuildRecentSearchesAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const recentSearches = await AsyncStorage.getItem('recentSearches');
  if (recentSearches) {
    const recentSearchesJson = JSON.parse(recentSearches);
    return dispatch({
      type: REBUILD_RECENT_SEARCHES,
      payload: recentSearchesJson,
    });
  } else {
    return dispatch({type: REBUILD_RECENT_SEARCHES, payload: []});
  }
};

export const addRecentSearch = (
  recentSearch: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  const recentSearches = await AsyncStorage.getItem('recentSearches');
  if (recentSearches) {
    const recentSearchesJson = JSON.parse(recentSearches);
    await AsyncStorage.setItem(
      'recentSearches',
      JSON.stringify([recentSearch, ...recentSearchesJson]),
    );
  } else {
    await AsyncStorage.setItem(
      'recentSearches',
      JSON.stringify([recentSearch]),
    );
  }
  return dispatch({type: ADD_RECENT_SEARCH, payload: recentSearch});
};
