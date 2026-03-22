type Coordinates = {
  latitud: number;
  longitud: number;
};

export type WeatherData = {
  temperature: number;
  humidity: number;
  apparentTemperature: number;
  windSpeed: number;
  visibility: number;
  sunrise: string;
  sunset: string;
  cloud_cover: number;
};

export const getWeather = async (coordinates: Coordinates): Promise<WeatherData> => {

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitud}&longitude=${coordinates.longitud}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=visibility,cloud_cover&daily=sunrise,sunset&timezone=auto`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error al obtener el clima");
  }

  const data = await res.json();

  return {
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    apparentTemperature: data.current.apparent_temperature,
    windSpeed: data.current.wind_speed_10m,
    visibility: data.hourly.visibility[0],
    sunrise: data.daily.sunrise[0],
    sunset: data.daily.sunset[0],
    cloud_cover: data.hourly.cloud_cover[0]
  };
};