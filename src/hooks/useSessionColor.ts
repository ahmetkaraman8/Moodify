import { gradients } from '@/theme';
import { EmotionMoodType, MusicMoodType } from '@/types';

type Params = {
  baseMood: MusicMoodType | EmotionMoodType;
  targetMood?: EmotionMoodType;
};

export const useSessionColor = ({ baseMood, targetMood }: Params) => {
  const isEmotionMood = (mood: EmotionMoodType | MusicMoodType): mood is EmotionMoodType => {
    return mood in gradients.emotionMood;
  };

  if (isEmotionMood(baseMood)) {
    if (targetMood) {
      return [gradients.emotionMood[baseMood][0], gradients.emotionMood[targetMood][1]];
    }

    return [gradients.emotionMood[baseMood][0], gradients.emotionMood[baseMood][1]];
  } else {
    return [gradients.musicMood[baseMood][0], gradients.musicMood[baseMood][1]];
  }
};
