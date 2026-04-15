import { typography } from '@/theme';
import { ColorValue } from 'react-native';

export type FontWeightValues =
  (typeof typography.fontFamily)[keyof typeof typography.fontFamily];

export type GradientProps = {
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
};
