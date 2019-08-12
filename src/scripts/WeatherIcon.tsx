import * as React from 'react';
// import sunny from '../assets/weather-icons/sunny.png';
import '../assets/weather-icons/sunny.png';
import '../assets/weather-icons/mostly-sunny.png';
import '../assets/weather-icons/partly-sunny.png';
import '../assets/weather-icons/intermittent-clouds.png';
import '../assets/weather-icons/hazy-sunshine.png';
import '../assets/weather-icons/mostly-cloudy.png';
import '../assets/weather-icons/cloudy.png';
import '../assets/weather-icons/dreary-overcast.png';
import '../assets/weather-icons/fog.png';
import '../assets/weather-icons/showers.png';
import '../assets/weather-icons/mostly-cloudy-with-showers.png';
import '../assets/weather-icons/partly-sunny-with-showers.png';
import '../assets/weather-icons/t-storms.png';
import '../assets/weather-icons/mostly-cloudy-with-t-storms.png';
import '../assets/weather-icons/partly-sunny-with-t-storms.png';
import '../assets/weather-icons/rain.png';
import '../assets/weather-icons/flurries.png';
import '../assets/weather-icons/mostly-cloudy-with-flurries.png';
import '../assets/weather-icons/partly-sunny-with-flurries.png';
import '../assets/weather-icons/snow.png';
import '../assets/weather-icons/mostly-cloudy-with-snow.png';
import '../assets/weather-icons/ice.png';
import '../assets/weather-icons/sleet.png';
import '../assets/weather-icons/freezing-rain.png';
import '../assets/weather-icons/rain-and-snow.png';
import '../assets/weather-icons/hot.png';
import '../assets/weather-icons/cold.png';
import '../assets/weather-icons/windy.png';
import '../assets/weather-icons/clear.png';
import '../assets/weather-icons/mostly-clear.png';
import '../assets/weather-icons/partly-cloudy.png';
import '../assets/weather-icons/intermittent-clouds-night.png';
import '../assets/weather-icons/hazy-moonlight.png';
import '../assets/weather-icons/mostly-cloudy-night.png';
import '../assets/weather-icons/partly-cloudy-with-showers-night.png';
import '../assets/weather-icons/mostly-cloudy-with-showers-night.png';
import '../assets/weather-icons/partly-cloudy-with-t-storms-night.png';

import '../assets/weather-icons/mostly-cloudy-with-t-storms-night.png';
import '../assets/weather-icons/mostly-cloudy-with-flurries-night.png';
import '../assets/weather-icons/mostly-cloudy-with-snow-night.png';

export const WeatherIcon = ({ id }: { id: number }) => {
  const style = {
    width: '100pxsrc/assets/weather-icons/',
    height: '200px'
  };
  return <img style={style} src={weatherIconIdMap[id]} />;
  // return <img style={style} src={sunny} />;
};

const weatherIconIdMap: Record<number, string> = {
  1: 'src/assets/weather-icons/sunny.png',
  2: 'src/assets/weather-icons/mostly-sunny.png',
  3: 'src/assets/weather-icons/partly-sunny.png',
  4: 'src/assets/weather-icons/intermittent-clouds.png',
  5: 'src/assets/weather-icons/hazy-sunshine.png',
  6: 'src/assets/weather-icons/mostly-cloudy',
  7: 'src/assets/weather-icons/cloudy',
  8: 'src/assets/weather-icons/dreary-overcast',
  11: 'src/assets/weather-icons/fog',
  12: 'src/assets/weather-icons/showers',
  13: 'src/assets/weather-icons/mostly-cloudy-with-showers',
  14: 'src/assets/weather-icons/partly-sunny-with-showers',
  15: 'src/assets/weather-icons/t-storms',
  16: 'src/assets/weather-icons/mostly-cloudy-with-t-storms',
  17: 'src/assets/weather-icons/partly-sunny-with-t-storms',
  18: 'src/assets/weather-icons/rain',
  19: 'src/assets/weather-icons/flurries',
  20: 'src/assets/weather-icons/mostly-cloudy-with-flurries',
  21: 'src/assets/weather-icons/partly-sunny-with-flurries',
  22: 'src/assets/weather-icons/snow',
  23: 'src/assets/weather-icons/mostly-cloudy-with-snow',
  24: 'src/assets/weather-icons/ice',
  25: 'src/assets/weather-icons/sleet',
  26: 'src/assets/weather-icons/freezing-rain',
  29: 'src/assets/weather-icons/rain-and-snow',
  30: 'src/assets/weather-icons/hot',
  31: 'src/assets/weather-icons/cold',
  32: 'src/assets/weather-icons/windy',
  33: 'src/assets/weather-icons/clear',
  34: 'src/assets/weather-icons/mostly-clear',
  35: 'src/assets/weather-icons/partly-cloudy',
  36: 'src/assets/weather-icons/intermittent-clouds-night',
  37: 'src/assets/weather-icons/hazy-moonlight',
  38: 'src/assets/weather-icons/mostly-cloudy-night',
  39: 'src/assets/weather-icons/partly-cloudy-with-showers-night',
  40: 'src/assets/weather-icons/mostly-cloudy-with-showers-night',
  41: 'src/assets/weather-icons/partly-cloudy-with-t-storms-night',
  42: 'src/assets/weather-icons/mostly-cloudy-with-t-storms-night',
  43: 'src/assets/weather-icons/mostly-cloudy-with-flurries-night',
  44: 'src/assets/weather-icons/mostly-cloudy-with-snow-night'
};
