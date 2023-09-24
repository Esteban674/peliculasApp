import ImageColors from 'react-native-image-colors';
import {IOSImageColors} from 'react-native-image-colors/lib/typescript/types';

export const getImageColors = async (url: string) => {
  const colors = await ImageColors.getColors(url, {
    fallback: '#228B22',
    cache: true,
    key: url,
  });

  let primary;
  let secondary;

  if (colors.platform === 'android') {
    // Access android properties
    primary = colors.dominant;
    secondary = colors.average;
  } else {
    // Access iOS properties
    primary = (colors as IOSImageColors).primary;
    secondary = (colors as IOSImageColors).secondary;
  }

  return [primary, secondary];
};
