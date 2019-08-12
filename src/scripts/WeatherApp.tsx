import * as React from 'react';
import '../styles/WeatherApp';
import { FiveDayForecast } from './FiveDayForecast';
import { SearchBar } from './Searchbar';
import {
  WeatherDataProvider,
  IDailyForecast
} from './DataProviders/WeatherDataProvider';
import { WeatherIcon } from './WeatherIcon';

interface IWeatherAppProps {}
interface IWeatherAppState {
  fiveDayForecastData: any;
}

export class WeatherApp extends React.Component<
  IWeatherAppProps,
  IWeatherAppState
> {
  private locationKey: string;
  private dataProvider: WeatherDataProvider;

  constructor(props) {
    super(props);

    this.dataProvider = new WeatherDataProvider();

    this.state = {
      fiveDayForecastData: undefined
    };
  }

  public render() {
    return (
      <div className='weather-app'>
        <SearchBar />
        <FiveDayForecast data={this.state.fiveDayForecastData} />
        <WeatherIcon id={1} />
      </div>
    );
  }

  public componentDidMount() {
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
        const fiveDayForecastData: IDailyForecast[] =
          fiveDayForecast.data.DailyForecasts;
        this.setState({ fiveDayForecastData });
      });
  }
}
