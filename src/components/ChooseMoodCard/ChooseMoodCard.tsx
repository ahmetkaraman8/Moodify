import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@components';
import LinearGradient from 'react-native-linear-gradient';
import { colors, spacing, fontSize, fontFamily } from '@/theme';
import { common } from '@/utils';
import { useTranslation } from 'react-i18next';

interface ChooseMoodCardProps {
  onPress: () => void;
}

export const ChooseMoodCard = ({ onPress }: ChooseMoodCardProps) => {
  const { t } = useTranslation();
  return (
    <LinearGradient
      colors={[colors.accent.electricPurple, colors.accent.neonPink]}
      style={[styles.container, common.allCenter]}
    >
      <View style={[styles.text, common.allCenter]}>
        <Text
          color={colors.text.primary}
          size={fontSize.sm}
          weight={fontFamily.medium}
        >
          {t('home.start')}
        </Text>
        <Text
          color={colors.text.primary}
          size={fontSize.xxl}
          weight={fontFamily.bold}
          lineHeight={fontSize.xxxl}
        >
          {t('home.feeling')}
        </Text>
      </View>
      <Button
        title={t('home.chooseMood')}
        onPress={onPress}
        backgroundColor={colors.text.primary}
        paddingVertical={spacing[16]}
        paddingHorizontal={spacing[48]}
        textColor={colors.background.primary}
        textSize={fontSize.xmd}
        fontWeight={fontFamily.semiBold}
        lineHeight={fontSize.md}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    paddingVertical: spacing[24],
    gap: spacing[20],
  },
  text: {
    gap: spacing[8],
  },
});
