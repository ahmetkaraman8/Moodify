import { ActivityType, EmotionMoodType, MusicMoodType } from '@/types';
import { moodShiftMap } from './moodShiftMap';
import { moodActivityMap } from './moodActivityMap';
import { activityEmojiMap } from './activityEmojiMap';

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

export const moodActivityNamer = (
  mood: MusicMoodType | EmotionMoodType,
  activity: ActivityType,
) => {
  const key = `${mood}->${activity}`;
  return moodActivityMap[key] ?? null;
};

export const isActivityType = (value: ActivityType | EmotionMoodType): value is ActivityType => {
  return value in activityEmojiMap;
};
