import * as React from 'react';
import '../styles/FiveDayForecast';
import { IDailyForecast } from './DataProviders/WeatherDataProvider';
import { SingleDayForecast } from './SingleDayForecast';

interface IFiveDayForecastProps {
  data: IDailyForecast[];
}

interface IFiveDayForecastState {}

export class FiveDayForecast extends React.Component<
  IFiveDayForecastProps,
  IFiveDayForecastState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    return <div className='five-day-forecast'>{this.renderX()}</div>;
  }

  private renderX() {
    if (this.props.data) {
      return this.renderFiveDailyForecasts();
    } else {
      return <></>;
    }
  }

  private renderFiveDailyForecasts() {
    return this.props.data.map((dailyForecast: IDailyForecast) => {
      return (
        <SingleDayForecast key={dailyForecast.EpochDate} data={dailyForecast} />
      );
    });
  }
}
