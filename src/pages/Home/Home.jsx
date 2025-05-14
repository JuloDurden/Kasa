// Importation des composants
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Title from '../../components/Title/Title'
import { Link } from 'react-router-dom'

//Importation des images et des éléments des annonces
import homeBanner from '../../assets/home-banner.webp'
import logements from '../../data/logements.json'

// Importation des fichiers de style et d'effets
import './Home.scss'
import FadeInOnLoad from '../../components/FadeIn/FadeIn'

function Home() {
    return (
        <main className='home'>
          <Title title="Accueil"/>
          <div className='home__banner'>
            <Banner image={homeBanner} text='Chez vous, partout et ailleurs' darken={true} />
          </div>
          <FadeInOnLoad className='home__gallery'>
              {logements.map((logement) => (
                <Link key={logement.id} to={`/location/${logement.id}`}>
                  <Card image={logement.cover} text={logement.title} />
                </Link>
              ))}
          </FadeInOnLoad>
        </main>
    )
  }
  
  export default Home