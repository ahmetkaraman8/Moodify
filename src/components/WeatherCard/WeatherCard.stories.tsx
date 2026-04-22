import { View } from 'react-native';
import { WeatherCard } from './WeatherCard';
import { InsightCard } from '../InsightCard/InsightCard';

export default {
  title: 'Components/WeatherCard',
};

export const Sunny = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    }}
  >
    <WeatherCard weather="sunny" />
  </View>
);
export const Cloudy = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    }}
  >
    <WeatherCard weather="cloudy" />
  </View>
);
export const Rainy = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    }}
  >
    <WeatherCard weather="rainy" />
  </View>
);
export const Night = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    }}
  >
    <WeatherCard weather="night" />
  </View>
);
