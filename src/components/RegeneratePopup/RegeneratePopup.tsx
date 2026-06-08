import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from '@components';
import { colors, fontFamily, fontSize, spacing } from '@/theme';
import { Icons } from '@assets';
import { useTranslation } from 'react-i18next';
import { useSessionColor } from '@/hooks';
import { EmotionMoodType, MusicMoodType } from '@/types';

interface RegeneratePopupProps {
  baseMood: EmotionMoodType | MusicMoodType;
  targetMood?: EmotionMoodType;
  onGenerate: () => void;
  onCancel: () => void;
  visible: boolean;
}

export const RegeneratePopup = ({
  baseMood,
  targetMood,
  onGenerate,
  onCancel,
  visible,
}: RegeneratePopupProps) => {
  const { t } = useTranslation();
  const buttonColors = useSessionColor({ baseMood, targetMood });
  const renderButtons = () => {
    return (
      <View style={styles.buttonsContainer}>
        <Button
          gradient={{ colors: buttonColors }}
          title={t('regenerate.button')}
          fontWeight={fontFamily.semiBold}
          onPress={onGenerate}
        />
        <TouchableOpacity onPress={onCancel}>
          <Text size={fontSize.xmd} weight={fontFamily.medium} color={colors.text.tertiary}>
            {t('general.cancel')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderDescription = () => {
    return (
      <>
        <Text
          size={fontSize.xmd}
          weight={fontFamily.regular}
          color={colors.text.secondary}
          style={styles.descriptionText}
        >
          {t('regenerate.description')}
        </Text>
        <Text size={fontSize.xmd} weight={fontFamily.regular} color={colors.text.secondary}>
          {t('regenerate.subdescription')}
        </Text>
      </>
    );
  };
  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Icons.regenerate />
        <Text size={fontSize.lg} weight={fontFamily.semiBold} color={colors.text.primary}>
          {t('regenerate.title')}
        </Text>
      </View>
    );
  };
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.popuopContainer}>
          {renderTitle()}
          {renderDescription()}
          {renderButtons()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // yarı opak siyah
    justifyContent: 'center',
    alignItems: 'center',
  },
  popuopContainer: {
    backgroundColor: colors.background.card,
    padding: spacing[24],
    marginHorizontal: spacing[48],
    borderRadius: 16,
    alignItems: 'center',
  },
  titleContainer: {
    gap: spacing[12],
    paddingBottom: spacing[8],
    alignItems: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    paddingBottom: spacing[4],
  },
  buttonsContainer: {
    gap: spacing[12],
    paddingTop: spacing[24],
    alignItems: 'center',
  },
});
