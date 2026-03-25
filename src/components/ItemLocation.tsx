import { MapPin } from 'lucide-react'
import '../styles/itemLocation.css'


function ItemLocation() {
  return (
      <div className='location-card'>
          <div className='location-title'>
            <MapPin color='#3585ff'/>
            <div className='location-title-text'>
                <h4>Madrid</h4>
                <span>España</span>
            </div>
          </div>

          <h3>18°</h3>
      </div>
  )
}

export default ItemLocation
