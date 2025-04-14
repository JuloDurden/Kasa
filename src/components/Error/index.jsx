import { Link } from 'react-router-dom'
import './styles.css'

function Error() {
    return (
        <div className='error-404'>
            <p className="error-number">404</p>
            <p className="error-txt">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error