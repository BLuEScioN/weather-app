import * as React from 'react';
import '../styles/SingleDayForecast';

interface ISingleDayForecastProps {}

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
        <div>Hello</div>
      </div>
    );
  }
}
