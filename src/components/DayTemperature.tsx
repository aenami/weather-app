import '../styles/dayTemperature.css'
import TemperatureGraphic from './TemperatureGraphic'

function DayTemperature() {
  return (
    <div className='temperatureCard'>
      <h2>Temparatura a lo largo del dia</h2>
      
      <TemperatureGraphic/>

    </div>
  )
}

export default DayTemperature
