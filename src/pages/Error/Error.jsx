import { Link } from 'react-router-dom'
import './Error.scss'
import FadeInOnLoad from '../../components/FadeIn/FadeIn'

function Error() {
    return (
        <main className='error404'>
            <FadeInOnLoad>
                <p className="error404__number">404</p>
            </FadeInOnLoad>
            <FadeInOnLoad>
                <p className="error404__txt">Oups! La page que vous demandez n'existe pas.</p>
            </FadeInOnLoad>
            <FadeInOnLoad>   
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </FadeInOnLoad>
        </main>
    )
}

export default Error