import * as React from 'react';
import '../styles/SingleDayForecast';
import { IDailyForecast } from './DataProviders/WeatherDataProvider';
import { WeatherIcon } from './WeatherIcon';

interface ISingleDayForecastProps {
  data: IDailyForecast;
}

interface ISingleDayForecastState {}

export class SingleDayForecast extends React.Component<
  ISingleDayForecastProps,
  ISingleDayForecastState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='single-day-forecast'>
        <div className='date'>{this.props.data.Date}</div>
        <WeatherIcon
          id={this.props.data.Day.Icon}
          style={{}}
          className={'sdf-weather-icon'}
        />
        <div>{this.props.data.Day.IconPhrase}</div>
      </div>
    );
  }
}
