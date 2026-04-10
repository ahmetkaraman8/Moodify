import React, { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  PanResponder,
  StyleSheet,
  Text,
} from 'react-native';
import { useRouter } from 'expo-router';
import { screenWidth } from '@/utils';

export const DevFloatingButton = () => {
  if (!__DEV__) return null;

  const router = useRouter();

  const pan = useRef(
    new Animated.ValueXY({ x: screenWidth - 50, y: 50 }),
  ).current;
  const [open, setOpen] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gesture) => {
        return Math.abs(gesture.dx) > 2 || Math.abs(gesture.dy) > 2;
      },

      onPanResponderGrant: () => {
        pan.setOffset({
          x: (pan.x as any)._value,
          y: (pan.y as any)._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[styles.container, { transform: pan.getTranslateTransform() }]}
      {...panResponder.panHandlers}
    >
      {open && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.childButton}
            onPress={() => router.push('/storybook')}
          >
            <Text style={styles.text}>Storybook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.childButton}
            onPress={() => router.push('/others/NetworkLoggerScreen')}
          >
            <Text style={styles.text}>Network</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={() => setOpen(!open)}>
        <Text style={styles.text}>DEV</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default DevFloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF9F1C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    marginBottom: 10,
    alignItems: 'center',
    gap: 8,
  },
  childButton: {
    backgroundColor: '#FFBF69',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
