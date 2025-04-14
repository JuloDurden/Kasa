import logo from './logo.svg'
import './styles.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src={logo} alt='Kasa' className='logo' />
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header