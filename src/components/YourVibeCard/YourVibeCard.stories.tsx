import { View } from 'react-native';
import { YourVibeCard } from './YourVibeCard';

export default {
  title: 'Components/YourVibeCard',
};

export const Default = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      paddingHorizontal: 24,
    }}
  >
    <YourVibeCard activity="workingOut" baseMood="calm" targetMood="energetic" />
  </View>
);

export const KeepVibe = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      paddingHorizontal: 24,
    }}
  >
    <YourVibeCard activity="studying" baseMood="motivated" />
  </View>
);
