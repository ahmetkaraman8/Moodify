import { View, StyleSheet, Button } from 'react-native';
import { Text } from '@components';
import { colors, fontSize, fontFamily } from '@theme';
import { Icons } from '@assets';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text
        size={fontSize.xxl}
        weight={fontFamily.regular}
        color={colors.text.primary}
      >
        Moodify App
      </Text>
      <Icons.spotifyIcon width={120} height={120} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
