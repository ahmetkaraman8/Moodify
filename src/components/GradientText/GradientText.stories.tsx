import { View } from 'react-native';
import { GradientText } from './GradientText';
import { colors, fontFamily, fontSize } from '@/theme';

export default {
  title: 'Components/GradientText',
};

export const Default = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <GradientText
      colors={[colors.mood.chillStart, colors.mood.chillEnd]}
      size={fontSize.xxxl}
      weight={fontFamily.bold}
    >
      Moodify
    </GradientText>
  </View>
);
