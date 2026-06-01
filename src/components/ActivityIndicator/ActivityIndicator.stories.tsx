import { View } from 'react-native';
import { ActivityIndicator } from './ActivityIndicator';

export default {
  title: 'components/ActivityIndicator',
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
    <ActivityIndicator />
  </View>
);

export const BaseMood = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
    }}
  >
    <ActivityIndicator baseMood="calm" />
  </View>
);

export const TargetMood = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
      gap: 16,
    }}
  >
    <ActivityIndicator baseMood="calm" targetMood="angry" />
  </View>
);
