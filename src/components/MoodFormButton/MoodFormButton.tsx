import { colors, fontFamily, fontSize, gradients } from '@/theme';
import { ActivityType } from '@/types';
import { activityEmojiMap, common } from '@/utils';
import { Text } from '@components';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MoodFormButton {
  label: ActivityType;
  onPress: () => void;
}

export const MoodFormButton = ({ label, onPress }: MoodFormButton) => {
  const { t } = useTranslation();
  const labelText = t(`activity.${label}`);
  const emoji = activityEmojiMap[label];
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <LinearGradient
        colors={gradients.other.moodFormButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <View style={styles.container}>
          <View style={[styles.content, common.allCenter]}>
            {emoji && <Text size={fontSize.xxl}>{emoji}</Text>}
            <Text color={colors.text.primary} weight={fontFamily.medium}>
              {labelText}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  gradientBorder: {
    borderRadius: 20,
    padding: 1,
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: colors.other.moodFormButton,
  },
  content: {
    gap: 12,
    minHeight: 108,
  },
});
