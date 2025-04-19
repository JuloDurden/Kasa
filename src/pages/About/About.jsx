// Importation des composants
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"

// Importation de l'image de la banner et des éléments du collapse
import aboutBanner from '../../assets/about-banner.webp'
import aboutData from '../../data/about.json'

// Importation du fichier de style
import './About.scss'

function About() {
    return (
        <main className="about">
          <div className="about__banner">
            <Banner image={aboutBanner} />
          </div>
          <div className="about__collapse">
            {aboutData.map((about) => (
              <Collapse key={about.id} title={about.title} text={about.description} />
            ))}
          </div>
        </main>
    )
  }
  
  export default About