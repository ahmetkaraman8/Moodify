import { colors, spacing } from '@/theme';
import { common } from '@/utils';
import { Icons } from '@assets';
import { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface StepProgressProps {
  totalSteps: number;
  currentStep: number;
  onBackPress: () => void;
}

export const StepProgress = ({ totalSteps, currentStep, onBackPress }: StepProgressProps) => {
  const steps = useMemo(() => Array.from({ length: totalSteps }), [totalSteps]);

  const renderSteps = () => {
    return steps.map((_, index) => {
      const isActive = index < currentStep;

      return (
        <View
          key={index}
          style={[
            styles.step,
            {
              backgroundColor: isActive ? colors.text.primary : colors.other.divider,
            },
          ]}
        />
      );
    });
  };

  return (
    <View style={[common.allCenteredRow]}>
      <View style={common.square24}>
        <TouchableOpacity onPress={onBackPress} hitSlop={20}>
          <Icons.arrowLeft />
        </TouchableOpacity>
      </View>

      <View style={styles.stepsContainer}>{renderSteps()}</View>
      <View style={common.square24} />
    </View>
  );
};

const styles = StyleSheet.create({
  stepsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: spacing[12],
    gap: spacing[8],
  },
  step: {
    flex: 1,
    height: 4,
    borderRadius: 99,
  },
});
