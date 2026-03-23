import { createContext } from "react";

type Coordinates = {
    latitud: number;
    longitud: number;
}

type Location = {
    country: string;
    city: string;
}

export type WeatherData = {
  temperature: number;
  humidity: number;
  apparentTemperature: number;
  windSpeed: number;
  visibility: number;
  sunrise: string;
  sunset: string;
  cloud_cover: number;
  graphicData: { hour: string, temp: number }[]
};

type WeatherContext = {
    coordinates: Coordinates;
    setCoordinates: (coordinates: Coordinates) => void;
    location: Location;
    setLocation: (location: Location) => void;
    weatherDetails: WeatherData | undefined;
    setWeatherDetails: (details: WeatherData) => void;
}

export const weatherContext = createContext<WeatherContext | undefined>(undefined)