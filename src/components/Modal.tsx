import '../styles/modal.css'
import { useEffect } from 'react'
import { TrendingUp, Search} from 'lucide-react'
import ItemLocation from './ItemLocation'
import { Locations } from '../utils/locationsCard'

type propsModal = {
    onclose: () => void;
}

function Modal({onclose}:propsModal) {
    // Use effect para desactivar el scroll de la pagina cuando el componente se monte
    useEffect( () => {
        document.body.classList.add("no-scroll");

        // -- Funcion que se ejecuta cuando el componente se desmonte
        // Limpieza: cuando el modal se desmonte, quita la clase
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

  return (
    <div className='modal-backdrop'>

        <div className='modal'>
            <div className='modal-header'>
                <div className='modal-title'>
                    <h2>Cambiar ubicación</h2>
                    <span>Busca tu ciudad o selecciona una ubicación</span>
                </div>
                                
                <button onClick={onclose} className='btn-modal'>
                    X
                </button>
            </div>
            
            <section className='modal-search'>

                <div className="search-container">
                    <Search size={16} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Buscar ciudad..."
                        className="search-input"
                    />
                </div>
                
                <div className='citys-box'>
                    <div className='search-title'>
                        <TrendingUp/>
                        <span>Ubicaciones populares</span>
                    </div>
                    
                    {Locations.map( (location) => (
                        <ItemLocation key={location.ciudad} location={location}/>
                    ) ) }
                    
                </div>
                
            </section>
            
        </div>
    </div>
  )
}

export default Modal
