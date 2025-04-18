import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
    return (
        <main className='error404'>
            <p className="error404__number">404</p>
            <p className="error404__txt">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error