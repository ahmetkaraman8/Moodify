import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, GradientText } from '@components';
import { colors, gradients, fontFamily, fontSize, spacing } from '@/theme';
import { ActivityType, EmotionMoodType, GenreType, LanguageType } from '@/types';
import { useTranslation } from 'react-i18next';

interface MoodSummaryCardProps {
  activity: ActivityType;
  baseMood: EmotionMoodType;
  targetMood?: EmotionMoodType;
  genres: GenreType[];
  language: LanguageType;
}

export const MoodSummaryCard = ({
  activity,
  baseMood,
  targetMood,
  genres,
  language,
}: MoodSummaryCardProps) => {
  const { t } = useTranslation();
  const activityText = t(`activity.${activity}`);
  const baseMoodText = t(`mood.${baseMood}`);
  const targetMoodText = t(`mood.${targetMood}`);
  const languageText = t(`language.${language}`);
  const rows = [
    {
      title: 'Activity',
      content: (
        <Text size={fontSize.lg} weight={fontFamily.semiBold} color={colors.text.primary}>
          {activityText}
        </Text>
      ),
    },
    {
      title: 'Emotional Flow',
      content: (
        <View style={styles.rowInline}>
          {targetMood ? (
            <>
              <GradientText
                colors={gradients.emotionMood[baseMood]}
                size={fontSize.lg}
                weight={fontFamily.semiBold}
              >
                {baseMoodText}
              </GradientText>

              <Text size={fontSize.lg} weight={fontFamily.semiBold} color={colors.text.primary}>
                {' '}
                →{' '}
              </Text>

              <GradientText
                colors={gradients.emotionMood[targetMood]}
                size={fontSize.lg}
                weight={fontFamily.semiBold}
              >
                {targetMoodText}
              </GradientText>
            </>
          ) : (
            <GradientText
              colors={gradients.emotionMood[baseMood]}
              size={fontSize.lg}
              weight={fontFamily.semiBold}
            >
              {baseMoodText} • Keep Vibe
            </GradientText>
          )}
        </View>
      ),
    },
    {
      title: 'Genre',
      content: (
        <View style={styles.rowInline}>
          {genres.map((genre, index) => {
            const isLast = index === genres.length - 1;

            return (
              <GradientText
                key={genre}
                colors={gradients.genre[genre]}
                size={fontSize.lg}
                weight={fontFamily.semiBold}
              >
                {t(`genre.${genre}`)}
                {!isLast && ', '}
              </GradientText>
            );
          })}
        </View>
      ),
    },
    {
      title: 'Language',
      content: (
        <Text size={fontSize.lg} weight={fontFamily.semiBold} color={colors.text.primary}>
          {languageText}
        </Text>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      {rows.map((row, index) => {
        const isLast = index === rows.length - 1;

        return (
          <View key={row.title}>
            <View style={styles.row}>
              <Text size={fontSize.sm} weight={fontFamily.medium} color="rgba(255,255,255,0.45)">
                {row.title}
              </Text>
              {row.content}
            </View>

            {!isLast && <View style={styles.separator} />}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    overflow: 'hidden',
  },
  row: {
    paddingHorizontal: spacing[20],
    paddingVertical: spacing[8],
    alignItems: 'center',
    gap: spacing[4],
  },
  separator: {
    height: 1,
    backgroundColor: colors.text.primary,
    opacity: 0.1,
  },
  rowInline: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
