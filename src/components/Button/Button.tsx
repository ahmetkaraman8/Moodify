import { colors, spacing, fontSize, fontFamily } from '@/theme';
import { FontWeightValues, GradientProps } from '@/types';
import { common } from '@/utils';
import { Text } from '@components';
import { ReactNode } from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  gradient?: GradientProps;
  textColor?: string;
  textSize?: number;
  fontWeight?: FontWeightValues;
  lineHeight?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconSpacing?: number;
  fullWidth?: boolean;
  style?: ViewStyle;
}

export const Button = ({
  title,
  onPress,
  backgroundColor = colors.background.card,
  gradient,
  textColor = colors.text.primary,
  textSize = fontSize.md,
  fontWeight = fontFamily.regular,
  lineHeight = fontSize.md,
  borderRadius = 16,
  borderWidth,
  borderColor,
  paddingVertical = spacing[16],
  paddingHorizontal = spacing[16],
  disabled = false,
  loading = false,
  icon,
  iconSpacing = spacing[8],
  fullWidth = false,
  style,
}: ButtonProps) => {
  const Content = () => {
    return loading ? (
      <ActivityIndicator color={textColor} />
    ) : (
      <View style={common.allCenteredRow}>
        {icon && <View style={{ marginRight: iconSpacing }}>{icon}</View>}
        <Text
          style={{ includeFontPadding: false }}
          size={textSize}
          weight={fontWeight}
          color={textColor}
          lineHeight={lineHeight}
        >
          {title}
        </Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        {
          backgroundColor,
          borderRadius,
          borderWidth,
          borderColor,
          overflow: 'hidden',
          opacity: disabled ? 0.5 : 1,
        },
        fullWidth && { width: '100%' },
        common.allCenteredRow,
        style,
      ]}
    >
      {gradient ? (
        <LinearGradient
          colors={gradient.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            {
              paddingVertical,
              paddingHorizontal,
            },
            common.allCenteredRow,
          ]}
        >
          <Content />
        </LinearGradient>
      ) : (
        <View
          style={[
            {
              paddingVertical,
              paddingHorizontal,
            },
            common.allCenteredRow,
          ]}
        >
          <Content />
        </View>
      )}
    </TouchableOpacity>
  );
};
