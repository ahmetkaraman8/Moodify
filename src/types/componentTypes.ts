import { fontFamily, gradients } from '@/theme';

export type FontWeightValues = (typeof fontFamily)[keyof typeof fontFamily];

export type GradientProps = {
  colors: string[];
};

export type MoodType = keyof typeof gradients.mood;
export type GenreType = keyof typeof gradients.genre;

export type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'night';
