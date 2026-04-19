import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';
import { fontFamily } from '@/theme';

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
    <Text weight={fontFamily.medium}>Moodify Text</Text>
  </View>
);

export const SemiBold = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text weight={fontFamily.semiBold}>Moodify Text</Text>
  </View>
);

export const Bold = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text weight={fontFamily.bold}>Moodify Text</Text>
  </View>
);
