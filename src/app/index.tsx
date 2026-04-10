import { View, StyleSheet, Button } from 'react-native';
import { Text } from '@components';
import { typography } from '@theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text size={typography.fontSize.xxl} weight="regular">
        Moodify App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
