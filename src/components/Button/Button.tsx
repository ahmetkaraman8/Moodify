import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from '@components';
import { ReactNode } from 'react';
import { colors, spacing, typography } from '@/theme';
import { FontWeightValues } from '@/types';
import { common } from '@/utils';

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
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
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor,
          borderRadius,
          borderWidth,
          borderColor,
          paddingVertical,
          paddingHorizontal,
          opacity: disabled ? 0.5 : 1,
        },
        fullWidth && { width: '100%' },
        common.allCenteredRow,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
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
      )}
    </TouchableOpacity>
  );
};
