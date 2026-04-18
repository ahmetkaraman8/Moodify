import { View } from 'react-native';
import { ChooseMoodCard } from './ChooseMoodCard';

export default {
  title: 'Components/ChooseMoodCard',
};

export const Default = () => (
  <View
    style={{
      width: '100%',
      height: '100%',
      paddingHorizontal: 24,
      justifyContent: 'center',
    }}
  >
    <ChooseMoodCard onPress={() => {}} />
  </View>
);
