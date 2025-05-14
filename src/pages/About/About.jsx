// Importation des composants
import { Navigate } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import Title from "../../components/Title/Title"

// Importation de l'image de la banner et des éléments du collapse
import aboutBanner from '../../assets/about-banner.webp'
import aboutData from '../../data/about.json'

// Importation des fichiers de style et d'effet
import './About.scss'
import FadeInOnLoad from '../../components/FadeIn/FadeIn'

function About() {
    if (!aboutData || !Array.isArray(aboutData) || aboutData.length === 0) {
      console.log("Erreur : les données sont vides ou indisponibles");
      return <Navigate to='/404' replace />;
    }

    return (
        <main className="about">
          <Title title="À propos" />
          <div className="about__banner">
            <Banner image={aboutBanner} />
          </div>
          <FadeInOnLoad className="about__collapse">
            {aboutData.map((about) => (
              <Collapse key={about.id} title={about.title} text={about.description} />
            ))}
          </FadeInOnLoad>
        </main>
    )
  }
  
  export default About