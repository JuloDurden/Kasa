// Importation des composants
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'

//Importation des images et des éléments des annonces
import homeBanner from '../../assets/home-banner.webp'
import logements from '../../data/logements.json'

// Importation des fichiers de style
import './Home.scss'

function Home() {
    return (
        <main className='home'>
          <div className='home__banner'>
            <Banner image={homeBanner} text='Chez vous, partout et ailleurs' darken={true} />
          </div>
          <div className='home__gallery'>
              {logements.map((logement) => (
                <Link key={logement.id} to={`/location/${logement.id}`}>
                  <Card key={logement.id} image={logement.cover} text={logement.title} />
                </Link>
              ))}
          </div>
        </main>
    )
  }
  
  export default Home