import { View, StyleSheet, Button } from 'react-native';
import { Text } from '@components';
import { typography } from '@theme';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text size={typography.fontSize.xxl} weight="regular">
        Moodify App
      </Text>
      <Button
        title="Go to Storybook"
        onPress={() => router.push('/storybook')}
      />
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
