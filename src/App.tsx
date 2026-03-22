import './App.css'
import { useEffect } from 'react'
import Nav from './components/nav/Nav'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/detailsWeather/WeatherDetails'
import DayTemperature from './components/DayTemperature'
import '../src/styles/app.css'
import { useContextWeather } from './context/useWeatherContext'

function App() {
  const { location } = useContextWeather()

  // Hook que se encargara de hacer el llamado a la api de OpenMeteo y traer los datos que nos interesan
  useEffect( ()=>{  
    // 1. Construimos la url con los parametros que necesita para devolvernos la data que queremos
    const url =`https://api.open-meteo.com/v1/forecast?latitude=${location.latitud}&longitude=${location.longitud}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m&daily=sunrise,sunset&hourly=visibility&timezone=auto`;

    // 2. Enviamos la peticion a la API y esperamos su respuesta
    fetch(url)
      .then(res => res.json()) // 3. Parseamos la respuesta hacia texto plano
      .then(data => {
        // 4. Decidimos que hacer con la data
        console.log(data)



      })
      .catch(err => {
        console.log('Ocurrio un error al realizar la peticion hacia la API del clima: ' + err)
      })

  }, [])

  return (
    <>
      <main className='main'>
        <Nav/>

        <div className='informationSection'>

          <div className='first-column'>
            <WeatherCard/>
          
            <DayTemperature/>
          </div>

          <div>
            <WeatherDetails/>
          </div>

        </div>
       
      </main>
    </>
  )
}

export default App
