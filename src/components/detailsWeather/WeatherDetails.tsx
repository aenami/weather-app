import '../../styles/detailsCard.css'
import { Thermometer } from 'lucide-react'

function WeatherDetails() {
  return (
    <section className='detailsCard'>
      <h3>Detalles del clima</h3>

      <div className='detailsBox'>
        <div className='detail'>
          <div className='detail-title'>
            <Thermometer/>
            <span>Sensacion terminca</span>
          </div>
          <h2>22°</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <span>Sensacion terminca</span>
          </div>
          <h2>22°</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <span>Sensacion terminca</span>
          </div>
          <h2>22°</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <span>Sensacion terminca</span>
          </div>
          <h2>22°</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <span>Sensacion terminca</span>
          </div>
          <h2>22°</h2>
        </div>
        <div className='detail'>
           <div className='detail-title'>
            <span>Sensacion terminca</span>
          </div>
          <h2>22°</h2>
        </div>

      </div>
    </section>
  )
}

export default WeatherDetails
