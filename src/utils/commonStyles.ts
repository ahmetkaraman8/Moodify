import { StyleSheet } from 'react-native';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

export const common = StyleSheet.create({
  //Container
  flex1: {
    flex: 1,
  },
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
  opacity05: {
    opacity: 0.5,
  },

  //Width-Height
  width100: {
    width: '100%',
  },

  //Background
  opacity06Background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
});
