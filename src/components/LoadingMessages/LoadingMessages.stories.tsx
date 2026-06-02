import { View } from 'react-native';
import { LoadingMessages } from './LoadingMessages';

export default {
  title: 'components/LoadingMessages',
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
    <LoadingMessages />
  </View>
);
