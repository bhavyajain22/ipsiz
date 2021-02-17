import {COLORS} from '../assets/colors';

export const convertAppStateToColor = (appState: 'carsi' | 'hal' | 'pazar') => {
  switch (appState) {
    case 'carsi':
      return COLORS.mainGreen;
    case 'hal':
      return COLORS.mainDark;
    case 'pazar':
      return COLORS.mainPurple;
    default:
      return COLORS.mainGreen;
  }
};
