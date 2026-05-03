import { View } from 'react-native';
import { MoodFormButton } from './MoodFormButton';

export default {
  title: 'components/MoodFormButton',
};

export const Activity = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
      flexDirection: 'row',
      gap: 16,
    }}
  >
    <MoodFormButton label="working" onPress={() => {}} />
    <MoodFormButton label="studying" onPress={() => {}} />
  </View>
);

export const Mood = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
      flexDirection: 'row',
      gap: 16,
    }}
  >
    <MoodFormButton label="happy" onPress={() => {}} />
    <MoodFormButton label="motivated" onPress={() => {}} />
  </View>
);
