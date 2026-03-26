import { MapPin } from 'lucide-react'
import { useEffect, useState} from 'react'
import '../styles/itemLocation.css'
import { getWeather } from '../services/weatherService'
import type { LocationType } from '../utils/locationsCard'
import { useContextWeather } from '../context/useWeatherContext'


type Location = {
  location: LocationType;
  onClick: () => void;
}


function ItemLocation( { location, onClick }: Location) {
  // Consumimos el contexto global
  const { setCoordinates, setWeatherDetails, setLocation } =  useContextWeather()
  // Estado que manejara la temperatura del card
  const [temperature, setTemperature] = useState<number | null>(null)

  // Funcion que se encargara de cambiar todos los datos del dashboard principal
  const handlerWeather = async () => {  
    setCoordinates({ latitud: location.latitud, longitud: location.longitud })
    setLocation( { country: location.pais, city:location.ciudad  } )
    const data = await getWeather( { latitud: location.latitud, longitud: location.longitud } )
    setWeatherDetails(data)
    // Evento para cerrar el modal
    onClick()
  }

  // Hook que se encargara de setear la temperatura cuando el componente sea montado por primera vez
  useEffect( ()=> {
    // Funcion que hara el fetch respectivo
    const getTemperature = async () => {
      // 1. Hacer la consulta API
      const data = await getWeather( { latitud: location.latitud, longitud: location.longitud } )
      // 2. Guardar el valor de la temperatura en un estado
      setTemperature(data.temperature)

    }

    getTemperature()
  },[location.latitud, location.longitud]) // POnemos las dependencias externas que utiliza el useEffect


  return (
      <div className='location-card' onClick={handlerWeather}>
          <div className='location-title'>
            <MapPin color='#3585ff'/>
            <div className='location-title-text'>
                <h4> { location.pais } </h4>
                <span> {location.ciudad } </span>
            </div>
          </div>

          <h3> { temperature } °C</h3>
      </div>
  )
}

export default ItemLocation
