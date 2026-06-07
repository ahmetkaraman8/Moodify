import { colors, fontFamily, fontSize, spacing } from '@/theme';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '@components';

interface TrackItemProps {
  imageUrl: string;
  trackName: string;
  artistName: string;
}

export const TrackItem = ({ imageUrl, trackName, artistName }: TrackItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.trackInfo}>
        <Text size={fontSize.xmd} weight={fontFamily.medium} color={colors.text.primary}>
          {trackName}
        </Text>
        <Text
          size={fontSize.sm}
          weight={fontFamily.regular}
          color={colors.text.primary}
          lineHeight={fontSize.md}
          style={styles.artistName}
        >
          {artistName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing[12],
    paddingVertical: spacing[8],
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.other.divider,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  trackInfo: {
    gap: spacing[2],
  },
  artistName: {
    opacity: 0.55,
  },
});
