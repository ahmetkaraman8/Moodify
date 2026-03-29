import { colors, typography } from '@theme';
import { Text as RNText, TextStyle } from 'react-native';

interface TextProps {
  size?: number;
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
  color?: string;
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

export const Text = ({
  size = typography.fontSize.md,
  weight = 'regular',
  color = colors.text.disabled,
  children,
  style,
}: TextProps) => {
  return (
    <RNText
      style={[
        {
          fontSize: size,
          fontFamily: typography.fontFamily[weight],
          color,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};
