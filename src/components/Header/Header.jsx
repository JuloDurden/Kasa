import logo from '../../assets/logo.svg'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src={logo} alt='Kasa' className='logo' />
            <nav>
                <Link className='linkHome' to='/'>Accueil</Link>
                <Link className='linkAbout' to='/about'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header