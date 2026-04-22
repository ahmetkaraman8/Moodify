import { StyleSheet } from 'react-native';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

export const common = StyleSheet.create({
  //Container
  allCenteredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },

  //Text
  richTextRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacity06: {
    opacity: 0.6,
  },

  //Width-Height
  width100: {
    width: '100%',
  },
});
