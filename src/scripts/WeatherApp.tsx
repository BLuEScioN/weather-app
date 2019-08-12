import * as React from 'react';
import '../styles/WeatherApp';
import { FiveDayForecast } from './FiveDayForecast';
import { SearchBar } from './Searchbar';
import { WeatherDataProvider } from './DataProviders/WeatherDataProvider';
import { WeatherIcon } from './WeatherIconsMap';

export class WeatherApp extends React.Component {
  private locationKey: string;
  private dataProvider: WeatherDataProvider;

  constructor(props) {
    super(props);

    this.dataProvider = new WeatherDataProvider();

    // Get weather data. First, get location key. Then, the 5 day forecast
    this.dataProvider
      .getLocationKey('seattle')
      .then((locationKey: string) => {
        this.locationKey = locationKey;
        console.log(this.locationKey);
      })
      .then(() => {
        return this.dataProvider.getFiveDayForecast(this.locationKey);
      })
      .then((fiveDayForecast: any) => {
        console.log(fiveDayForecast);
      });
  }

  public render() {
    return (
      <div className='weather-app'>
        <SearchBar />
        <FiveDayForecast />
        <WeatherIcon id={1} />
      </div>
    );
  }
}
