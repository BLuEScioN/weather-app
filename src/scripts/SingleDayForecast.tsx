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

  render() {
    return (
      <div className='single-day-forecast'>
        <div>{this.props.data.Day.IconPhrase}</div>
        <WeatherIcon id={this.props.data.Day.Icon} />
      </div>
    );
  }
}
