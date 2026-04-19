import { FontWeightValues } from '@/types';
import { colors, fontSize, fontFamily } from '@theme';
import { Text as RNText, StyleProp, TextStyle } from 'react-native';

interface TextProps {
  size?: number;
  weight?: FontWeightValues;
  color?: string;
  lineHeight?: number;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Text = ({
  size = fontSize.md,
  weight = fontFamily.regular,
  color = colors.text.disabled,
  lineHeight,
  children,
  style,
}: TextProps) => {
  return (
    <RNText
      style={[
        {
          fontSize: size,
          fontFamily: weight,
          lineHeight,
          color,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};
