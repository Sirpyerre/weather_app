import convert from 'convert-units';
import {
    SUN,
} from './../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const getWeatherState = weather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);
    console.log(`temp: ${temp}, temperature: ${temperature}`);

    const data = {
        humidity,
        temperature: temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;
