import * as React from 'react';
import '../styles/WeatherApp';
import { FiveDayForecast } from './FiveDayForecast';
import { SearchBar } from './Searchbar';

export class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <SearchBar />
        <FiveDayForecast />
      </div>
    );
  }
}
