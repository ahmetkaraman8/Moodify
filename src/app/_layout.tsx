import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DevFloatingButton } from '@/components';
import { startNetworkLogging } from 'react-native-network-logger';
import '../localization/index';

SplashScreen.preventAutoHideAsync();

if (__DEV__) {
  startNetworkLogging();
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="storybook" options={{ headerShown: false }} />
          <Stack.Screen
            name="others/NetworkLoggerScreen"
            options={{ headerShown: false }}
          />
        </Stack>
        <StatusBar style="auto" />
        <DevFloatingButton />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
