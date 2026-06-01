import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { gradients } from '@/theme';
import { EmotionMoodType } from '@/types';

const BAR_COUNT = 5;
const minHeight = 10;

const HEIGHT_PATTERNS = [
  [20, 42, 28, 52, 34],
  [46, 24, 54, 36, 58],
  [28, 58, 22, 48, 26],
  [54, 32, 44, 26, 50],
];

interface ActivityIndicatorProps {
  baseMood?: EmotionMoodType;
  targetMood?: EmotionMoodType;
  monochrome?: boolean;
  monochromeColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface AnimatedBarProps {
  index: number;
  color: string;
  size: 'sm' | 'md' | 'lg';
}

const SIZE_CONFIG = {
  sm: {
    width: 8,
    maxHeight: 40,
  },

  md: {
    width: 12,
    maxHeight: 58,
  },

  lg: {
    width: 14,
    maxHeight: 74,
  },
};

const AnimatedBar = memo(({ index, color, size }: AnimatedBarProps) => {
  const progress = useSharedValue(0);

  const config = SIZE_CONFIG[size];

  React.useEffect(() => {
    progress.value = withDelay(
      index * 90,
      withRepeat(
        withSequence(
          withTiming(1, {
            duration: 700 + index * 80,
          }),
          withTiming(0, {
            duration: 800,
          }),
        ),
        -1,
        true,
      ),
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const patternA = HEIGHT_PATTERNS[index % HEIGHT_PATTERNS.length];
    const patternB = HEIGHT_PATTERNS[(index + 1) % HEIGHT_PATTERNS.length];

    const height = interpolate(
      progress.value,
      [0, 1],
      [patternA[index], patternB[index]],
      Extrapolation.CLAMP,
    );

    return {
      height,
    };
  });

  return (
    <Animated.View
      style={[
        styles.barWrapper,
        {
          height: config.maxHeight,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.bar,
          {
            width: config.width,
            minHeight,
            backgroundColor: color,
          },
          animatedStyle,
        ]}
      />
    </Animated.View>
  );
});

export const ActivityIndicator = ({
  baseMood,
  targetMood,
  monochrome = true,
  monochromeColor = '#FFFFFF',
  size = 'md',
}: ActivityIndicatorProps) => {
  const getBarColor = (index: number) => {
    if (monochrome && !baseMood) {
      return monochromeColor;
    }

    const progress = index / (BAR_COUNT - 1);

    if (baseMood && targetMood) {
      const baseGradient = gradients.emotionMood[baseMood];
      const targetGradient = gradients.emotionMood[targetMood];

      return interpolateColor(
        progress,
        [0, 0.33, 0.66, 1],
        [baseGradient[0], baseGradient[1], targetGradient[0], targetGradient[1]],
      );
    }

    const gradient = baseMood ? gradients.emotionMood[baseMood] : monochromeColor;

    return interpolateColor(progress, [0, 1], [gradient[0], gradient[1]]);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: BAR_COUNT }).map((_, index) => (
        <AnimatedBar key={index} index={index} color={getBarColor(index)} size={size} />
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 8,
  },

  barWrapper: {
    justifyContent: 'flex-end',
  },

  bar: {
    borderRadius: 999,
  },
});
