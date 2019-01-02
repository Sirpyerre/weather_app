const location = "Puebla, mx";
const api_key = "b829551248311c33c67e8704b2c80a98";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;