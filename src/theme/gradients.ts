import { colors } from './colors';

export const gradients = {
  genre: {
    electronic: [colors.genre.electronicStart, colors.genre.electronicEnd],
    pop: [colors.genre.popStart, colors.genre.popEnd],
    rock: [colors.genre.rockStart, colors.genre.rockEnd],
    rap: [colors.genre.rapStart, colors.genre.rapEnd],
    indie: [colors.genre.indieStart, colors.genre.indieEnd],
    jazzBlues: [colors.genre.jazzBluesStart, colors.genre.jazzBluesEnd],
    classical: [colors.genre.classicalStart, colors.genre.classicalEnd],
    rnb: [colors.genre.rnbStart, colors.genre.rnbEnd],
    ambient: [colors.genre.ambientStart, colors.genre.ambientEnd],
    phonk: [colors.genre.phonkStart, colors.genre.phonkEnd],
    kpop: [colors.genre.kpopStart, colors.genre.kpopEnd],
    afro: [colors.genre.afroStart, colors.genre.afroEnd],
  },
  mood: {
    chill: [colors.mood.chillStart, colors.mood.chillEnd],
    happy: [colors.mood.happyStart, colors.mood.happyEnd],
    sad: [colors.mood.sadStart, colors.mood.sadEnd],
    dark: [colors.mood.darkStart, colors.mood.darkEnd],
    focus: [colors.mood.focusStart, colors.mood.focusEnd],
    romantic: [colors.mood.romanticStart, colors.mood.romanticEnd],
  },
  energy: {
    low: [colors.energy.lowStart, colors.energy.lowEnd],
    medium: [colors.energy.mediumStart, colors.energy.mediumEnd],
    high: [colors.energy.highStart, colors.energy.highEnd],
  },
  weather: {
    sunny: [colors.weather.sunnyStart, colors.weather.sunnyEnd],
    rainy: [colors.weather.rainyStart, colors.weather.rainyEnd],
    night: [colors.weather.nightStart, colors.weather.nightEnd],
  },
};
