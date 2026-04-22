import { common } from '@/utils';
import { Icons } from '@assets';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GradientText, Text } from '@components';
import { WeatherType } from '@/types';
import { useWeatherContent } from '@/hooks';
import { colors, fontFamily, fontSize, gradients, spacing } from '@/theme';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';

type WeatherCardProps = {
  weather: WeatherType;
  onPress?: () => void;
};

export const WeatherCard = ({ weather, onPress }: WeatherCardProps) => {
  const { t } = useTranslation();
  const { title, description } = useWeatherContent(weather, {
    city: 'Istanbul',
    day: 'Monday',
  });
  const IconComponent = Icons[weather];
  const weatherColors = gradients.weather[weather];
  const textButtonColors = gradients.weatherTextButton[weather];
  return (
    <TouchableOpacity style={common.width100} onPress={onPress}>
      <View style={styles.container}>
        <LinearGradient
          colors={weatherColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.background}
        />
        <View style={common.justifyCenter}>
          <IconComponent />
        </View>
        <View style={styles.textContainer}>
          <Text
            size={fontSize.sm}
            lineHeight={fontSize.md}
            weight={fontFamily.medium}
            color={colors.text.primary}
            style={common.opacity06}
          >
            {title}
          </Text>
          <Text
            size={fontSize.xmd}
            lineHeight={fontSize.md}
            weight={fontFamily.semiBold}
            color={colors.text.primary}
          >
            {description}
          </Text>
          <GradientText
            size={fontSize.xmd}
            lineHeight={fontSize.md}
            colors={textButtonColors}
            weight={fontFamily.medium}
          >
            {t('weather.textButton')}
          </GradientText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing[16],
    gap: spacing[8],
    borderRadius: 20,
    overflow: 'hidden',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
  textContainer: {
    flex: 1,
    gap: spacing[4],
    justifyContent: 'center',
  },
});
