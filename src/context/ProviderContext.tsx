import { useState } from 'react'
import { weatherContext } from "./weatherContext";
import { type WeatherData } from './weatherContext';

// Tipamos el valor del children que recibira nuestro provider
type ChildrenGameProvider = {
    children: React.ReactNode;
}

// 2. Creamos el componente provider
// La prop children representara todo lo que envolveremos con este contexto
export function WeatherProvider({ children }: ChildrenGameProvider) {
    // Estados que compartiremos en el contexto global
    const [location, setLocation] = useState({country: 'Colombia', city: 'Popayan'}) 
    const [coordinates, setCoordinates] = useState({ latitud:2.43823, longitud: -76.61316 })
    const [weatherDetails, setWeatherDetails] = useState<WeatherData | undefined>(undefined)
    
    
    //5. Definimos el provider
    return (
        <weatherContext.Provider value={ {location, setLocation, weatherDetails, setWeatherDetails, coordinates, setCoordinates} }>
            {children}
        </weatherContext.Provider>
    )
}