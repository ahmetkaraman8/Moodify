import { StyleSheet } from 'react-native';
import { Text } from '@components';
import { ActivityType, EmotionMoodType, MusicMoodType } from '@/types';
import { useSessionColor, useSessionTitle } from '@/hooks';
import { LinearGradient } from 'react-native-linear-gradient';
import { colors, fontFamily, fontSize, spacing } from '@/theme';
import { activityEmojiMap } from '@/utils';
import { useMemo } from 'react';

interface PlaylistPictureProps {
  baseMood: EmotionMoodType | MusicMoodType;
  targetMood?: EmotionMoodType;
  activity?: ActivityType;
}

export const PlaylistPicture = ({ baseMood, targetMood, activity }: PlaylistPictureProps) => {
  const backgroundColors = useSessionColor({ baseMood, targetMood });
  const title = useSessionTitle({ baseMood, targetMood, activity });
  const emoji = activity ? activityEmojiMap[activity] : undefined;

  const calculatedFontSize = useMemo(() => {
    if (title.length < 25) return fontSize.xxxl;
    if (title.length < 35) return fontSize.xxl;
    return fontSize.xl;
  }, [title]);

  return (
    <LinearGradient colors={backgroundColors} style={styles.container}>
      {activity && <Text size={calculatedFontSize + 28}>{emoji}</Text>}
      <Text
        size={calculatedFontSize}
        weight={fontFamily.bold}
        color={colors.text.primary}
        lineHeight={spacing[40]}
        style={styles.text}
      >
        {title}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
    width: 248,
    height: 248,
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: spacing[8],
  },
});
