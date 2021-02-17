import {Reducer} from 'redux';
import {CONVERT_APP_TYPE} from '../types/app.types';

export type appReducerState = {
  selectedAppState: 'carsi' | 'hal' | 'pazar';
};

const initialState: appReducerState = {
  selectedAppState: 'carsi',
};

const AppReducer: Reducer<appReducerState> = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case CONVERT_APP_TYPE:
      return {...state, selectedAppState: action.payload};
    default:
      return state;
  }
};

export default AppReducer;
