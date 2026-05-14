import { colors, fontFamily, gradients } from '@/theme';
import { GenreType } from '@/types';
import { common } from '@/utils';
import { Text } from '@components';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GenreButtonProps {
  genre: GenreType;
  isSelected: boolean;
  onPress: () => void;
}

export const GenreButton = ({ genre, isSelected, onPress }: GenreButtonProps) => {
  const { t } = useTranslation();

  const genreText = t(`genre.${genre}`);

  const gradientColors = isSelected ? gradients.genre[genre] : gradients.other.moodFormButton;

  return (
    <TouchableOpacity onPress={onPress} style={common.flex1} activeOpacity={0.9}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <View style={[styles.container, isSelected && styles.selectedContainer]}>
          <View style={[styles.content, common.allCenter]}>
            <Text color={colors.text.primary} weight={fontFamily.medium}>
              {genreText}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 20,
    padding: 1,
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.other.moodFormButton,
  },
  selectedContainer: {
    backgroundColor: 'transparent',
  },
  content: {
    minHeight: 60,
  },
});
