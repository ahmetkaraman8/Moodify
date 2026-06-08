import { Button, View } from 'react-native';
import { useState } from 'react';

import { RegeneratePopup } from './RegeneratePopup';

export default {
  title: 'components/RegeneratePopup',
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: 'black',
      }}
    >
      <Button title="Open Popup" onPress={() => setVisible(true)} />

      <RegeneratePopup
        visible={visible}
        baseMood="energetic"
        onGenerate={closeModal}
        onCancel={closeModal}
      />
    </View>
  );
};
