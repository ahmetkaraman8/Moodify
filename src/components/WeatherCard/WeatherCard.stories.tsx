import { View } from 'react-native';
import { WeatherCard } from './WeatherCard';

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
      backgroundColor: 'black',
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
      backgroundColor: 'black',
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
      backgroundColor: 'black',
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
      backgroundColor: 'black',
    }}
  >
    <WeatherCard weather="night" />
  </View>
);
