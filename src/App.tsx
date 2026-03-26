import './App.css'
import { useEffect, useState } from 'react'
import Nav from './components/nav/Nav'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/detailsWeather/WeatherDetails'
import DayTemperature from './components/DayTemperature'
import '../src/styles/app.css'
import { useContextWeather } from './context/useWeatherContext'
import Modal from './components/Modal'
import { getWeather } from './services/weatherService'

function App() {
  // Estado para trabajar la visualizacion del modal
  const [onClose, setOnClose] = useState(false)

  // Consumiendo el contexto global
  const { coordinates, setWeatherDetails } = useContextWeather()

  // Hook que se encargara de hacer el llamado a la api de OpenMeteo y traer los datos que nos interesan
  useEffect( ()=>{  
    async function requestData() {
      try {
        // 2. Enviamos la peticion a la API y esperamos su respuesta
        const data = await getWeather(coordinates)

        // 3. Utilizamos la data para cambiar los estados
        setWeatherDetails(data)

      } catch (error) {
          // Cambiamos el estado que maneja los errores
          console.log('Ocurrio un error al realizar la peticion a la api: ' +  error)
        }
    }

    requestData()

  }, [coordinates, setWeatherDetails])

  return (
    <>
      <main className='main'>
        <Nav setOnClose={ () => setOnClose(true) }/>

        <div className='informationSection'>

          <div className='first-column'>
            <WeatherCard/>
          
            <DayTemperature/>
          </div>

          <div>
            <WeatherDetails/>
          </div>

        </div>

        { /* ---- Condicion para mostrar el label ----- */ }
        {onClose && <Modal onclose={() => setOnClose(false)} /> }
       
      </main>
    </>
  )
}

export default App
