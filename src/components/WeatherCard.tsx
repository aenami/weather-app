import { Cloud, MapPin } from 'lucide-react'
import '../styles/weathercard.css'
import { useContextWeather } from '../context/useWeatherContext'

function WeatherCard() {
  const { location } = useContextWeather()

  return (
    <article className='weatherCard'>

      <div className="mainInfo">
        <h3> <MapPin/> { location.country }, { location.city }</h3>

        <div>
          <h1>24°</h1>
          <h2>Parcialmente nublado</h2>
        </div>
        
        <div>
          <span>Actualizado hace 5m</span>
        </div>

      </div>

      <div className='divIcon'>
        <Cloud color='#deddfe' size={100}/>
      </div>
  
    </article>
  )
}

export default WeatherCard
