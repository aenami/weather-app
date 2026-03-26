import { Cloud, MapPin } from 'lucide-react'
import '../styles/weathercard.css'
import { useContextWeather } from '../context/useWeatherContext'

function WeatherCard() {
  const { location, weatherDetails } = useContextWeather()
  const cloud_cover = weatherDetails?.cloud_cover
  
  return (
    <article className='weatherCard'>

      <div className="mainInfo">
        <h3> <MapPin/> { location.country }, { location.city }</h3>

        <div>
          <h1> {weatherDetails?.temperature} °</h1>
          <h2>
            { cloud_cover &&  cloud_cover > 70 && 'Mayormente nublado'}
            { cloud_cover &&  cloud_cover < 30 && 'Poco nublado'}
            { cloud_cover &&  cloud_cover > 30 && cloud_cover < 70 && 'Medianamente nublado'}
          </h2>
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
