import logo from '../../assets/logo.svg'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation();

    return (
        <header>
            <img src={logo} alt='Kasa' className='logo' />
            <h1 className='sr-only'>Kasa</h1>
            <nav>
                <Link className={`linkHome ${location.pathname === '/' ? 'active' : ''}`} to='/'>Accueil</Link>
                <Link className={`linkAbout ${location.pathname === '/about' ? 'active' : ''}`} to='/about'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header