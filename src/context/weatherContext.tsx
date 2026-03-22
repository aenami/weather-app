import { createContext } from "react";

type Coordinates = {
    latitud: number;
    longitud: number;
}

type Location = {
    country: string;
    city: string;
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
    coordinates: Coordinates;
    setCoordinates: (coordinates: Coordinates) => void;
    location: Location;
    setLocation: (location: Location) => void;
    temperature: number | undefined;
    setTemperature: (temperature: number | undefined) => void;
    weatherDetails: WeatherDetails | undefined;
    setWeatherDetails: (details: WeatherDetails) => void;

}

export const weatherContext = createContext<WeatherContext | undefined>(undefined)