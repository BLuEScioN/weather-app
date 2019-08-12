import axios from 'axios';
import { apiKey as apikey } from '../../../config/accuweather-config';

export interface IDailyForecast {
  Date: string;
  Day: IDailyForecastDayNight;
  Night: IDailyForecastDayNight;
  Temperatire: IDailyForecastTemperature;
  EpochDate: number;
}

export interface IDailyForecastDayNight {
  HasPrecipitation: boolean;
  Icon: number;
  IconPhrase: string;
  PrecipitationIntensity: string;
  PrecipitationType: string;
}

export interface IDailyForecastTemperature {
  Maximum: { Unit: string; UnitType: number; Value: number };
  Minimum: { Unit: string; UnitType: number; Value: number };
}

export class WeatherDataProvider {
  // TODO: Make a singleton
  /**
   * Calls AccuWeather's autocomplete search API
   * Returns basic information about locations matching an autocomplete of the search text
   * @param q Text to use for Autocomplete search
   * @param language String indicating the language in which to return the resource
   */
  public async getLocationKey(
    q: string,
    language: string = 'en-us'
  ): Promise<string> {
    const url: string =
      'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';

    try {
      const locationData: any = await axios.get(url, {
        params: {
          apikey,
          q,
          language
        }
      });

      const locationKey: string = locationData.data[0].Key;

      return locationKey;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  /**
   * Calls AccuWeather's 5 days of daily forecasts API
   * Returns an array of daily forecasts for the next 5 days for a specific location
   * @param locationKey location key
   * @param language String indicating the language in which to return the resource
   * @param details Boolean value specifies whether or not to include full details in the response
   * @param metric Boolean value specifies whether or not to display metric values
   */
  public async getFiveDayForecast(
    locationKey: string,
    language: string = 'en-us',
    details: boolean = false,
    metric: boolean = false
  ): Promise<any> {
    const url: string = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`;

    try {
      const response: any = await axios.get(url, {
        params: {
          apikey,
          language,
          details,
          metric
        }
      });

      return response;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
