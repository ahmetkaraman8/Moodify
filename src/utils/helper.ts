import { EmotionMoodType, MusicMoodType } from '@/types';
import { moodShiftMap } from './moodShiftMap';

export const capitalizeFirstLetter = (text?: string) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const moodShiftNamer = (
  baseMood: EmotionMoodType | MusicMoodType,
  targetMood: EmotionMoodType,
) => {
  const key = `${baseMood} -> ${targetMood}`;

  return moodShiftMap[key] ?? null;
};
