import { colors, fontFamily, fontSize, gradients, spacing } from '@/theme';
import { MusicMoodType } from '@/types';
import { capitalizeFirstLetter, common } from '@/utils';
import { GradientText, Text } from '@components';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface InsightCardProps {
  mood: MusicMoodType;
  onPress: () => void;
}

export const InsightCard = ({ mood, onPress }: InsightCardProps) => {
  const { t } = useTranslation();
  const genreColors = gradients.musicMood[mood];
  const moodText = capitalizeFirstLetter(mood);
  const TextButton = () => {
    return (
      <TouchableOpacity>
        <GradientText colors={genreColors}>
          {t('home.insightButton', { mood: moodText })}
        </GradientText>
      </TouchableOpacity>
    );
  };

  const renderGenreText = () => {
    return (
      <View style={common.richTextRow}>
        <Text size={fontSize.md} lineHeight={fontSize.xxl} color={colors.text.primary}>
          {t('home.insightText1')}
        </Text>
        <GradientText size={fontSize.md} lineHeight={fontSize.xxl} colors={genreColors}>
          {moodText}
        </GradientText>
        <Text size={fontSize.md} lineHeight={fontSize.xxl} color={colors.text.primary}>
          {t('home.insightText2')}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, common.allCenter]}>
      <View style={[styles.text, common.allCenter]}>
        <Text
          size={fontSize.sm}
          lineHeight={fontSize.md}
          weight={fontFamily.medium}
          color={colors.text.tertiary}
        >
          {t('home.insightHeader')}
        </Text>
        {renderGenreText()}
      </View>
      <TextButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.background.border,
    paddingVertical: spacing[20],
    paddingHorizontal: spacing[8],
    width: '100%',
    gap: spacing[12],
  },
  text: {
    gap: spacing[8],
  },
});
