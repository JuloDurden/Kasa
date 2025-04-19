import Banner from "../../components/Banner/Banner"
import aboutBanner from '../../assets/about-banner.webp'
import './About.scss'

function About() {
    return (
        <main className="about">
          <div className="about__banner">
            <Banner image={aboutBanner} />
          </div>
        </main>
    )
  }
  
  export default About