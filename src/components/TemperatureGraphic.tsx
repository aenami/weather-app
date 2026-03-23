import React from 'react'
import {LineChart, Line,XAxis, YAxis,CartesianGrid, Tooltip,ResponsiveContainer} from "recharts";

import { useContextWeather } from '../context/useWeatherContext';

function TemperatureGraphic() {
    const { weatherDetails } = useContextWeather()

  return (
     <ResponsiveContainer width="100%" height={300}>
      <LineChart data={weatherDetails?.graphicData}>

        {/* Grilla de fondo */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* Eje X: usa la clave "hour" de cada objeto */}
        <XAxis dataKey="hour" />

        {/* Eje Y: se calcula automático, pero puedes acotarlo */}
        <YAxis unit="°C" domain={["auto", "auto"]} />

        {/* Tooltip al hacer hover */}
        <Tooltip formatter={(value) => [`${value}°C`, "Temperatura"]} />

        {/* La línea: usa la clave "temp" de cada objeto */}
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#378ADD"
          strokeWidth={2}
          dot={false}
        />

      </LineChart>
    </ResponsiveContainer>
  )
}

export default TemperatureGraphic
