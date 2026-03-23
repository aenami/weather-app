import { type WeatherData } from "../context/weatherContext";

type Coordinates = {
  latitud: number;
  longitud: number;
};

export const getWeather = async (coordinates: Coordinates): Promise<WeatherData> => {

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitud}&longitude=${coordinates.longitud}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=visibility,cloud_cover,temperature_2m&daily=sunrise,sunset&timezone=auto`;

  const res = await fetch(url);
  

  if (!res.ok) {
    throw new Error("Error al obtener el clima");
  }
  const now = new Date();

  const data = await res.json();

  // Convertimos los tiempos del API a Date
  const times = data.hourly.time.map( (t:string) => new Date(t));

  // Buscamos el índice más cercano a la hora actual
  const index = times.findIndex((t:Date) => t.getHours() === now.getHours());

  //----- Array de horas con su respectiva temperatura
  const graphicData = []

  // Crearmos los objetos que representaran cada punto de nuestro grafico
  for (let i = 0; i < index; i+=3 ) {
    const dataObject = { hour: data.hourly.time[i].split('T')[1], temp: data.hourly.temperature_2m[i] }
    graphicData.push(dataObject)
  }

  return {
    temperature: data.hourly.temperature_2m[index],
    humidity: data.current.relative_humidity_2m,
    apparentTemperature: data.current.apparent_temperature,
    windSpeed: data.current.wind_speed_10m,
    visibility: data.hourly.visibility[0],
    sunrise: data.daily.sunrise[0],
    sunset: data.daily.sunset[0],
    cloud_cover: data.hourly.cloud_cover[index],
    graphicData,
  };
};