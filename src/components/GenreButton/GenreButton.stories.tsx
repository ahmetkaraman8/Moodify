import { View } from 'react-native';
import { GenreButton } from './GenreButton';

export default {
  title: 'components/GenreButton',
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
    <GenreButton genre="pop" onPress={() => {}} isSelected={false} />
    <GenreButton genre="rock" onPress={() => {}} isSelected={true} />
  </View>
);
