import { View } from 'react-native';
import { TrackItem } from './TrackItem';

export default {
  title: 'components/TrackItem',
};

export const Activity = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: 'black',
    }}
  >
    <TrackItem
      imageUrl="https://picsum.photos/300"
      trackName="Blinding Lights"
      artistName="The Weeknd"
    />
  </View>
);
