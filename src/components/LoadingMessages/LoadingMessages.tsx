import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  SharedValue,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { colors, fontFamily, fontSize } from '@/theme';
import { getLoadingMessages } from '@/utils';

const CHANGE_INTERVAL = 2500;
const ANIMATION_DURATION = 650;
const ITEM_HEIGHT = 28;

interface AnimatedTextRowProps {
  text: string;
  progress: SharedValue<number>;
  index: number;
  totalCount: number;
}

const AnimatedTextRow = ({ text, progress, index, totalCount }: AnimatedTextRowProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const N = totalCount;

    let diff = (((index - progress.value) % N) + N) % N;

    // Üste çıkıp gözden kaybolan elemanı alta taşır
    if (diff > N - 2) {
      diff -= N;
    }

    const position = diff;

    // Opacity: -1 (Yukarı kayıp kaybolan), 0 (16px aktif), 1 (14px alt), 2 (12px en alt), 3 (Giriş yapacak olan)
    const opacity = interpolate(
      position,
      [-1, 0, 1, 2, 3],
      [0, 1, 0.7, 0.4, 0],
      Extrapolation.CLAMP,
    );

    // Scale dönüşümleri (Base font 16px üzerinden hesaplandı)
    // 16px -> scale(1) | 14px -> scale(0.875) | 12px -> scale(0.75)
    const scale = interpolate(
      position,
      [-1, 0, 1, 2, 3],
      [1, 1, 0.875, 0.75, 0.75],
      Extrapolation.CLAMP,
    );

    const translateY = position * ITEM_HEIGHT;

    return {
      opacity,
      transform: [{ translateY }, { scale }],
    };
  });

  return (
    <Animated.Text numberOfLines={1} style={[styles.text, animatedStyle]}>
      {text}
    </Animated.Text>
  );
};

export const LoadingMessages = () => {
  const loadingMessages = getLoadingMessages();
  const progress = useSharedValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Progress değerini sıfırlamak yerine sürekli 1 artırıyoruz
      progress.value = withTiming(progress.value + 1, {
        duration: ANIMATION_DURATION,
      });
    }, CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {loadingMessages.map((message, index) => (
        <AnimatedTextRow
          key={message}
          text={message}
          progress={progress}
          index={index}
          totalCount={loadingMessages.length}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * 3,
    overflow: 'hidden',
    width: '100%',
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    lineHeight: ITEM_HEIGHT,
    textAlign: 'center',
    fontSize: fontSize.md, // Ana font boyutu sabit, küçülmeler scale ile yapılıyor
    color: colors.text.tertiary,
    fontFamily: fontFamily.medium,
  },
});
