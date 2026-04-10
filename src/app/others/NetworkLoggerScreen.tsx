import NetworkLogger from 'react-native-network-logger';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NetworkLoggerScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NetworkLogger />
    </SafeAreaView>
  );
}
