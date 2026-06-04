import { View, StyleSheet } from 'react-native';
import { GradientText, Text } from '@components';
import { colors, fontSize, gradients, spacing } from '@/theme';
import { common } from '@/utils';
import { ActivityType, EmotionMoodType } from '@/types';
import { useTranslation } from 'react-i18next';

interface YourVibeCardProps {
  activity: ActivityType;
  baseMood: EmotionMoodType;
  targetMood?: EmotionMoodType;
}

export const YourVibeCard = ({ activity, baseMood, targetMood }: YourVibeCardProps) => {
  const { t } = useTranslation();
  const activityText = t(`activity.${activity}`);
  const baseMoodText = t(`mood.${baseMood}`);
  const targetMoodText = t(`mood.${targetMood}`);
  return (
    <View style={styles.container}>
      <View style={styles.background} />

      <Text size={fontSize.sm} color={colors.text.tertiary}>
        Your Vibe
      </Text>

      <View style={styles.vibeRow}>
        <Text size={fontSize.sm} color={colors.text.primary}>
          {activityText}
        </Text>
        <View style={common.row}>
          {targetMood ? (
            <>
              <GradientText colors={gradients.emotionMood[baseMood]} size={fontSize.sm}>
                {baseMoodText}
              </GradientText>

              <Text size={fontSize.sm} color={colors.text.primary}>
                {' '}
                →{' '}
              </Text>

              <GradientText colors={gradients.emotionMood[targetMood]} size={fontSize.sm}>
                {targetMoodText}
              </GradientText>
            </>
          ) : (
            <GradientText colors={gradients.emotionMood[baseMood]} size={fontSize.sm}>
              {baseMoodText} • Keep Vibe
            </GradientText>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 14,
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[12],
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.text.primary,
    opacity: 0.12,
  },
  vibeRow: {
    flexDirection: 'row',
    gap: 38,
  },
});
