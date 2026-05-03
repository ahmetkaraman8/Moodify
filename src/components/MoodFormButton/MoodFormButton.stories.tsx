import { View } from 'react-native';
import { MoodFormButton } from './MoodFormButton';

export default {
  title: 'components/MoodFormButton',
};

export const Default = () => (
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
