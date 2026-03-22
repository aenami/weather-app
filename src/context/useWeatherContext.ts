import { useContext } from 'react';
import { weatherContext } from "./weatherContext";

// Hook personalizado el cual internamente validara que nuestro GameContext se este trabajando dentro de un provider y que por lo tanto no sea null sus valores iniciales
export const useContextWeather = () => {
  const context = useContext(weatherContext);
  
  if (!context) {
    throw new Error("GameContext debe usarse dentro de un gameContextProvider");
  }
  
  return context; // Aquí TS garantiza que ya NO es undefined
};