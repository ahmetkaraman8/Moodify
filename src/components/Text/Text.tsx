import { FontWeightValues } from '@/types';
import { colors, typography } from '@theme';
import { Text as RNText, TextStyle } from 'react-native';

interface TextProps {
  size?: number;
  weight?: FontWeightValues;
  color?: string;
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

export const Text = ({
  size = typography.fontSize.md,
  weight = typography.fontFamily.regular,
  color = colors.text.disabled,
  children,
  style,
}: TextProps) => {
  return (
    <RNText
      style={[
        {
          fontSize: size,
          fontFamily: weight,
          color,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};
