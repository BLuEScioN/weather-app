import * as React from 'react';
import '../styles/FiveDayForecast';

interface IFiveDayForecastProps {}

interface IFiveDayForecastState {}

export class FiveDayForecast extends React.Component<
  IFiveDayForecastProps,
  IFiveDayForecastState
> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='five-day-forecast'>
        <div>Hello</div>
      </div>
    );
  }
}
