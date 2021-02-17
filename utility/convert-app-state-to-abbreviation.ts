export const convertAppStateToAbbreviation: (
  appState: 'carsi' | 'pazar' | 'hal',
) => 'b2b' | 'b2c' | 'c2c' = (appState) => {
  switch (appState) {
    case 'carsi':
      return 'b2c';
    case 'hal':
      return 'b2b';
    case 'pazar':
      return 'c2c';
    default:
      return 'b2c';
  }
};
