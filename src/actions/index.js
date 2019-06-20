import transformForecast from "../services/transformForecast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type:SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const api_key = "b829551248311c33c67e8704b2c80a98";
const url = "https://api.openweathermap.org/data/2.5/forecast";


export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // Activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        const state =  getState();
        const date = state.cities[payload] && state.cities[payload].forecastData;

        const now = new Date();

        if (date && (now - date) < 1 * 60 * 1000){
            return;
        }

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                // modificar al estado con el resultado de la promise (fetch)
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
    }
};