import { colors, gradients, spacing } from '@/theme';
import { Icons } from '@assets';
import React from 'react';
import { View } from 'react-native';
import { Button } from './Button';

export default {
  title: 'Components/Button',
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.md,
      padding: spacing.md,
    }}
  >
    {children}
  </View>
);

export const Default = () => (
  <Wrapper>
    <Button title="Default Button" onPress={() => {}} />
  </Wrapper>
);

export const CustomColors = () => (
  <Wrapper>
    <Button
      title="Custom Color"
      onPress={() => {}}
      backgroundColor={colors.energy.lowEnd}
      textColor={colors.text.primary}
    />
  </Wrapper>
);

export const Disabled = () => (
  <Wrapper>
    <Button title="Disabled Button" onPress={() => {}} disabled />
  </Wrapper>
);

export const Loading = () => (
  <Wrapper>
    <Button
      title="Loading..."
      onPress={() => {}}
      loading
      style={{ minWidth: 120 }}
    />
  </Wrapper>
);

export const FullWidth = () => (
  <Wrapper>
    <Button title="Full Width Button" onPress={() => {}} fullWidth />
  </Wrapper>
);

export const WithIcon = () => (
  <Wrapper>
    <Button
      title="Continue with Spotify"
      onPress={() => {}}
      backgroundColor="#1DB954"
      textColor={colors.text.primary}
      icon={<Icons.spotifyIcon width={20} height={20} />}
    />
  </Wrapper>
);

export const PaddingVariants = () => (
  <Wrapper>
    <Button
      title="Small Padding"
      onPress={() => {}}
      paddingVertical={spacing.xs}
      paddingHorizontal={spacing.sm}
    />

    <Button
      title="Large Padding"
      onPress={() => {}}
      paddingVertical={spacing.lg}
      paddingHorizontal={spacing.xxl}
    />
  </Wrapper>
);

export const LinearGradient = () => (
  <Wrapper>
    <Button
      title="Pop"
      onPress={() => {}}
      gradient={{
        colors: gradients.genre.pop,
      }}
      textColor={colors.text.primary}
      borderWidth={5}
      borderColor="red"
    />
    <Button
      title="Rock"
      onPress={() => {}}
      gradient={{
        colors: gradients.genre.rock,
      }}
      textColor={colors.text.primary}
    />
  </Wrapper>
);
