export const getXPosition = (pos: string): number => {
  switch (pos) {
    case 'middle':
      return 0;
    case 'right':
      return 60;
    case 'left':
      return -60;
    default:
      return 0;
  }
};

export const getYPosition = (pos: string): number => {
  switch (pos) {
    case 'middle':
      return -50;
    default:
      return -35;
  }
};

export const getColor = (pos: string): string => {
  switch (pos) {
    case 'middle':
      return '#2D3642';
    case 'right':
      return '#925FB1';
    case 'left':
      return '#69BC44';
    default:
      return '#69BC44';
  }
};

export const getText = (pos: string): string => {
  switch (pos) {
    case 'middle':
      return 'Hal';
    case 'left':
      return 'Çarşı';
    case 'right':
      return 'Pazar';
    default:
      return '';
  }
};

export const getScreen = (pos: string) => {
  switch (pos) {
    case 'middle':
      return 'hal_screen';
    case 'left':
      return 'carsi_screen';
    case 'right':
      return 'pazar_screen';
    default:
      return 'carsi_screen';
  }
};

export const getAppState: (
  pos: 'middle' | 'left' | 'right',
) => 'hal' | 'carsi' | 'pazar' = (pos) => {
  switch (pos) {
    case 'middle':
      return 'hal';
    case 'left':
      return 'carsi';
    case 'right':
      return 'pazar';
    default:
      return 'carsi';
  }
};
