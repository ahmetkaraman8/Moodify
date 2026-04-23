import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '@components';
import { Icons } from '@assets';
import { GenreType, MoodType } from '@/types';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fontFamily, fontSize, gradients, spacing } from '@/theme';
import { common } from '@/utils';
import { useSessionColor } from '@/hooks';

interface RecentSessionCardProps {
  title: string;
  baseMood: MoodType;
  targetMood?: MoodType;
  genre: GenreType;
}

export const RecentSessionCard = ({
  title,
  baseMood,
  targetMood,
  genre,
}: RecentSessionCardProps) => {
  const backgroundColors = useSessionColor({ baseMood, targetMood });
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
