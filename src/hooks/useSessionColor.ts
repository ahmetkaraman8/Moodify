import { gradients } from '@/theme';
import { MoodType } from '@/types';

type Params = {
  baseMood: MoodType;
  targetMood?: MoodType;
};

export const useSessionColor = ({ baseMood, targetMood }: Params) => {
  let colors;

  if (targetMood) {
    colors = [gradients.mood[baseMood][0], gradients.mood[targetMood][1]];
  } else {
    colors = [gradients.mood[baseMood][0], gradients.mood[baseMood][1]];
  }

  return colors;
};
