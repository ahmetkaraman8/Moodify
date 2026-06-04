import { View } from 'react-native';
import { PlaylistPicture } from './PlaylistPicture';

export default {
  title: 'Components/PlaylistPicture',
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
    <PlaylistPicture baseMood="energetic" activity="workingOut" />
  </View>
);
