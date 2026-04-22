import { colors, gradients } from '@/theme';
import { WeatherType } from '@/types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type Params = {
  city: string;
  day: string;
};

export const useWeatherContent = (weather: WeatherType, params: Params) => {
  const { t } = useTranslation();

  const content = useMemo(() => {
    const titles = t(`weather.${weather}.titles`, {
      returnObjects: true,
    }) as string[];

    const descriptions = t(`weather.${weather}.descriptions`, {
      returnObjects: true,
    }) as string[];

    const randomTitleIndex = Math.floor(Math.random() * titles.length);
    const randomDescriptionIndex = Math.floor(
      Math.random() * descriptions.length,
    );

    const title = t(`weather.${weather}.titles.${randomTitleIndex}`, params);
    const description = t(
      `weather.${weather}.descriptions.${randomDescriptionIndex}`,
      params,
    );

    return { title, description };
  }, [weather, params.city, params.day, t]);

  return content;
};
