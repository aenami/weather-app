import '../../styles/detailsCard.css'
import { Thermometer, Droplets, Wind, Cloudy, Sunset, Sunrise} from 'lucide-react'

function WeatherDetails() {
  return (
    <section className='detailsCard'>
      <h3>Detalles del clima</h3>

      <div className='detailsBox'>
        <div className='detail'>
          <div className='detail-title'>
            <Thermometer color='#4991fe'/>
            <span>Sensacion terminca</span>
          </div>
          <h2>22°C</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <Droplets color='#4991fe'/>
            <span>Humidity</span>
          </div>
          <h2>80%</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <Wind color='#4991fe'/>
            <span>Wind</span>
          </div>
          <h2>4.3Km/h</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <Cloudy color='#4991fe'/>
            <span>Visibility</span>
          </div>
          <h2>4m</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <Sunrise color='#4991fe'/>
            <span>Sunrise</span>
          </div>
          <h2>5:10 am</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <Sunset color='#4991fe'/>
            <span>Sunset</span>
          </div>
          <h2>18:05 pm</h2>
        </div>

      </div>
    </section>
  )
}

export default WeatherDetails
