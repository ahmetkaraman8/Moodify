import { View } from 'react-native';
import { MoodSummaryCard } from './MoodSummaryCard';

export default {
  title: 'components/MoodSummaryCard',
};

export const Default = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
    }}
  >
    <MoodSummaryCard
      activity="workingOut"
      baseMood="calm"
      targetMood="energetic"
      genres={['electronic', 'pop']}
      language="any"
    />
  </View>
);
export const SingleMood = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
    }}
  >
    <MoodSummaryCard activity="gaming" baseMood="motivated" genres={['rock']} language="device" />
  </View>
);
