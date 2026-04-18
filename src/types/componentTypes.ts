import { fontFamily } from '@/theme';

export type FontWeightValues = (typeof fontFamily)[keyof typeof fontFamily];

export type GradientProps = {
  colors: string[];
};
