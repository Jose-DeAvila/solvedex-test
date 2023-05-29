import HomeTemplate from '@components/templates/home/home.component';
import { AppName } from './components/templates/home/home.styled';
import Input from './components/atoms/input/input.component';
import { REGEX_CITY } from './constants';
import WeatherInfoCity from './components/molecules/weather-info-city/weather-info-city.component';
import WeaterInfoGeneral from './components/organisms/weather-info-general/weather-info-general.component';
import { useMemo, useState } from 'react';
import { getDayAndHour } from './utils/get-date.util';
import { useWeather } from './hooks/useWeather';
import { useDebounce } from 'use-debounce';
import Form from './components/molecules/form/form.component';
import FormAndResultsContainer from './components/organisms/form-and-results-container/form-and-results-container.component';

function App() {

  const [city, setCity] = useState<string>('');
  const [value] = useDebounce(city, 1000);
  const { loading, error, weatherInfo } = useWeather({ city: value });
  console.log(!!loading, !!error, !!weatherInfo, { loading, error, weatherInfo });

  const date = useMemo(() => getDayAndHour(new Date()), []);

  const handleChange = (value: string) => {
    setCity(value);
  }

  return (
    <HomeTemplate>
      <AppName data-test-target="app:header">Solvedex Weather App</AppName>
      <FormAndResultsContainer>
        <Form>
          <Input onChange={handleChange} placeholder='Search Here' regex={REGEX_CITY} type='text' isRequired ></Input>
        </Form>
        {
          loading && <WeaterInfoGeneral imageId={1095} >
            <p style={{ textAlign: 'center' }}>Loading...</p>
          </WeaterInfoGeneral>
        }
        {
          error && <WeaterInfoGeneral>
            <p data-test-target="error-message" style={{ textAlign: 'center' }}>{error}</p>
          </WeaterInfoGeneral>
        }
        {
          weatherInfo && <WeaterInfoGeneral imageId={weatherInfo.weatherId}>
            <WeatherInfoCity city={weatherInfo.city} degrees={weatherInfo.degrees}></WeatherInfoCity>
            <p>Wind Speed: {weatherInfo.windSpeed} km</p>
            <p>{date}</p>
            <p>{weatherInfo.mainWeather}</p>
          </WeaterInfoGeneral>
        }
      </FormAndResultsContainer>
    </HomeTemplate>
  )
}

export default App;
