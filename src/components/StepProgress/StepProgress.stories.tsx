import { useState } from 'react';
import { View, Button } from 'react-native';

import { StepProgress } from './StepProgress';

export default {
  title: 'components/StepProgress',
};

export const Default = () => {
  const totalSteps = 6;

  const [step, setStep] = useState(1);

  const increaseStep = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const decreaseStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'black',
        gap: 32,
      }}
    >
      <StepProgress totalSteps={totalSteps} currentStep={step} onBackPress={decreaseStep} />

      <Button title="Next Step" onPress={increaseStep} />
    </View>
  );
};
