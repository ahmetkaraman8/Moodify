import { fontFamily, gradients } from '@/theme';

export type FontWeightValues = (typeof fontFamily)[keyof typeof fontFamily];

export type GradientProps = {
  colors: string[];
};

export type MoodType = keyof typeof gradients.mood;
