import { useState } from 'react'
import { weatherContext } from "./weatherContext";

// Tipamos el valor del children que recibira nuestro provider
type ChildrenGameProvider = {
    children: React.ReactNode;
}

type weatherDetails = { 
    thermalSensation: number;
    humidity: number;
    wind: number;
    visibility: number;
    sunrise: string;
    sunset: string;
};

// 2. Creamos el componente provider
// La prop children representara todo lo que envolveremos con este contexto
export function WeatherProvider({ children }: ChildrenGameProvider) {
    // Estados que compartiremos en el contexto global
    const [location, setLocation] = useState({ latitud:2.43823, longitud: -76.61316 }) 
    const [temperature, setTemperature] = useState<number | undefined>(undefined)
    const [weatherDetails, setWeatherDetails] = useState<weatherDetails | undefined>(undefined)
    
    
    //5. Definimos el provider
    return (
        <weatherContext.Provider value={ {location, setLocation, temperature, setTemperature, weatherDetails, setWeatherDetails} }>
            {children}
        </weatherContext.Provider>
    )
}