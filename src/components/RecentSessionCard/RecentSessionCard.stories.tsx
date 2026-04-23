import { View } from 'react-native';
import { RecentSessionCard } from './RecentSessionCard';

export default {
  title: 'components/RecentSessionCard',
};

export const Default = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
      gap: 8,
    }}
  >
    <RecentSessionCard title="Chilling at Work" baseMood="chill" genre="pop" />
  </View>
);
