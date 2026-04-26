import { useSessionColor, useSessionTitle } from '@/hooks';
import { colors, fontFamily, fontSize, spacing } from '@/theme';
import { ActivityType, EmotionMoodType, GenreType, MusicMoodType, WeatherType } from '@/types';
import { common } from '@/utils';
import { Icons } from '@assets';
import { Text } from '@components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface RecentSessionCardProps {
  baseMood: MusicMoodType | EmotionMoodType;
  targetMood?: EmotionMoodType;
  activity?: ActivityType;
  weather?: WeatherType;
  genre?: GenreType[];
}

export const RecentSessionCard = ({
  baseMood,
  targetMood,
  activity,
  weather,
  genre,
}: RecentSessionCardProps) => {
  const backgroundColors = useSessionColor({ baseMood, targetMood });
  const title = useSessionTitle({ baseMood, targetMood, activity, weather, genre });
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <LinearGradient
          colors={backgroundColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={common.opacity06Background}
        />
        <View>
          <Text
            size={fontSize.md}
            lineHeight={fontSize.xl}
            weight={fontFamily.semiBold}
            color={colors.text.primary}
          >
            {title}
          </Text>
          <Text
            size={fontSize.sm}
            lineHeight={fontSize.md}
            color={colors.text.primary}
            style={common.opacity05}
          >
            2 hours ago
          </Text>
        </View>
        <Icons.arrowRight />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: spacing[12],
    paddingHorizontal: spacing[16],
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 18,
    overflow: 'hidden',
  },
});
