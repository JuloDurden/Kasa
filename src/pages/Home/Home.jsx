// Importation des composants
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'

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
              <Card key={logement.id} image={logement.pictures[0]} text={logement.title} />
            ))}
          </div>
        </main>
    )
  }
  
  export default Home