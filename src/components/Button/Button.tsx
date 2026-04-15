import { colors, spacing, typography } from '@/theme';
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
  fontSize?: number;
  fontWeight?: FontWeightValues;
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
  fontSize = typography.fontSize.md,
  fontWeight = typography.fontFamily.regular,
  borderRadius = 16,
  borderWidth,
  borderColor,
  paddingVertical = spacing.md,
  paddingHorizontal = spacing.md,
  disabled = false,
  loading = false,
  icon,
  iconSpacing = spacing.xs,
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
          size={fontSize}
          weight={fontWeight}
          color={textColor}
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
