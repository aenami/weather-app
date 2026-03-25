import '../../styles/navbar.css'
import { Sun } from 'lucide-react'

type navBtn = {
  setOnClose: () => void;
}

function Nav({ setOnClose }:navBtn) {

  return (
    <nav className='nav'>
        <div className='nav-title'>
          <Sun color='#1f64fc' size={35}/>
          <h2>WeatherApp</h2>
        </div>
        
        <button className='btn' onClick={setOnClose}>
          Cambiar ubicacion
        </button>

    </nav>
  )
}

export default Nav
