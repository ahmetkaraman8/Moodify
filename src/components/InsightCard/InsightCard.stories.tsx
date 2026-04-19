import { View } from 'react-native';
import { InsightCard } from './InsightCard';

export default {
  title: 'Components/InsigthCard',
};

export const Chill = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    }}
  >
    <InsightCard mood={'chill'} onPress={() => {}} />
  </View>
);

export const Happy = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    }}
  >
    <InsightCard mood={'happy'} onPress={() => {}} />
  </View>
);
