import '../../styles/navbar.css'
import { Sun } from 'lucide-react';
import ChangeLocation from './ChangeLocation';

function Nav() {
  return (
    <nav className='nav'>
        <div className='nav-title'>
          <Sun color='#1f64fc' size={35}/>
          <h2>WeatherApp</h2>
        </div>
        
        <ChangeLocation/>
    </nav>
  )
}

export default Nav
