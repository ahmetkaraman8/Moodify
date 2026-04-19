import MaskedView from '@react-native-masked-view/masked-view';
import { Text } from '@components';
import LinearGradient from 'react-native-linear-gradient';
import { ReactNode, ComponentProps } from 'react';

interface GradientTextProps extends ComponentProps<typeof Text> {
  children: ReactNode;
  colors: string[];
}

export const GradientText = ({
  children,
  colors,
  style,
  ...rest
}: GradientTextProps) => {
  return (
    <MaskedView
      maskElement={
        <Text {...rest} style={style}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...rest} style={[style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};
