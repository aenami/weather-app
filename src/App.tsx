import './App.css'
import Nav from './components/nav/Nav'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/detailsWeather/WeatherDetails'
import DayTemperature from './components/DayTemperature'
import '../src/styles/app.css'

function App() {
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
