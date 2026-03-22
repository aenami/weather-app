import { createContext } from "react";

type Location = {
    latitud: number;
    longitud: number;
}

type WeatherDetails = {
    thermalSensation: number;
    humidity: number;
    wind: number;
    visibility: number;
    sunrise: string;
    sunset: string;
}

type WeatherContext = {
    location: Location;
    setLocation: (location: Location) => void;
    temperature: number | undefined;
    setTemperature: (temperature: number | undefined) => void;
    weatherDetails: WeatherDetails | undefined;
    setWeatherDetails: (details: WeatherDetails) => void;

}

export const weatherContext = createContext<WeatherContext | undefined>(undefined)