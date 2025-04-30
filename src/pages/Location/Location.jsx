import { useParams, Navigate } from "react-router-dom"
import logements from '../../data/logements.json'

// Importation des composants
import Gallery from "../../components/Gallery/Gallery.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import Title from "../../components/Title/Title.jsx";

// Importation des feuilles et des images
import './Location.scss'
import StarEmpty from '../../assets/star-empty.svg'
import StarFilled from '../../assets/star-filled.svg'

function Location() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id)

    if (!logement) {
        return <Navigate to='/404' replace />;
    }

    return (
        <main className="location">
            <Title title={logement.title}/>
            <Gallery className="location__gallery" images={logement.pictures} />
            <article className="location__details" >
                <section className="location__infos" >
                    <>
                        <h2 className="location__infos--title" >{logement.title}</h2>
                        <h3 className="location__infos--situation" >{logement.location}</h3>
                    </>
                    <div className="location__infos--tags" >
                        {logement.tags.map((tag, index) =>(
                            <span key={index} className="location__infos--tag">{tag}</span>
                        ))}
                    </div>
                </section>
                <aside className="location__aside" >
                    <div className="location__aside--host">
                        <h2 className="location__aside--hostname" >{logement.host.name}</h2>
                        <img  className="location__aside--photo" src={logement.host.picture} alt="Photo de l'hôte" />
                    </div>
                    <div className="location__aside--rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <img key={i} src={i < logement.rating ? StarFilled : StarEmpty} alt="Étoile" />
                        ))}
                    </div>
                </aside>
            </article>
            <article className="location__collapses" >
                <Collapse className="collapse__description" title="Description" text={logement.description} />
                <Collapse className="collapse__equipment" title="Équipement" text={logement.equipments} />
            </article>
        </main>
    )
}

export default Location