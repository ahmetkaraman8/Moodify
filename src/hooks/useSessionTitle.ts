import { ActivityType, EmotionMoodType, GenreType, MusicMoodType, WeatherType } from '@/types';
import { moodShiftNamer } from '@/utils';
import { useTranslation } from 'react-i18next';

type Params = {
  baseMood: MusicMoodType | EmotionMoodType;
  targetMood?: EmotionMoodType;
  activity?: ActivityType;
  weather?: WeatherType;
  genre?: GenreType[];
};

export const useSessionTitle = ({ baseMood, targetMood, activity, weather, genre }: Params) => {
  const { t } = useTranslation();
  let title;
  if (weather) {
    title = t(`weatherSessionTitle.${weather}`);
  } else if (targetMood) {
    const suffix = moodShiftNamer(baseMood, targetMood);
    title = `${t(`mood.${baseMood}`)} → ${t(`mood.${targetMood}`)}`;

    if (suffix) {
      title += ` • ${t(`moodShift.${suffix}`)}`;
    }
  } else if (genre?.length === 1 && activity) {
    title = `${t(`activity.${activity}`)} ${t(`mood.${baseMood}`)} ${t(`genre.${genre}`)}`;
  } else if (genre?.length === 1) {
    title = `${t(`mood.${baseMood}`)} ${t(`genre.${genre}`)}`;
  } else if (activity) {
    title = `${t(`mood.${baseMood}`)} ${t(`activity.${activity}`)}`;
  } else {
    title = `${t(`mood.${baseMood}`)}`;
  }

  return title;
};
