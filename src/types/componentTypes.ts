import { fontFamily, gradients } from '@/theme';

export type FontWeightValues = (typeof fontFamily)[keyof typeof fontFamily];

export type GradientProps = {
  colors: string[];
};

export type MusicMoodType = keyof typeof gradients.musicMood;
export type EmotionMoodType = keyof typeof gradients.emotionMood;
export type GenreType = keyof typeof gradients.genre;

export type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'night';
export type ActivityType =
  | 'working'
  | 'studying'
  | 'workingOut'
  | 'walking'
  | 'relaxing'
  | 'driving'
  | 'gaming';

export type LanguageType = 'device' | 'english' | 'instrumental' | 'any' | 'mixed' | 'spanish';
