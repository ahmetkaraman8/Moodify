import { typography } from '@/theme';

export type FontWeightValues =
  (typeof typography.fontFamily)[keyof typeof typography.fontFamily];
