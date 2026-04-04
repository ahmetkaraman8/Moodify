import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';

export default {
  title: 'Components/Text',
};

export const Default = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Moodify Text</Text>
  </View>
);

export const Medium = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text weight="medium">Moodify Text</Text>
  </View>
);

export const SemiBold = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text weight="semiBold">Moodify Text</Text>
  </View>
);

export const Bold = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text weight="bold">Moodify Text</Text>
  </View>
);
