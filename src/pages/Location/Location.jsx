import { useParams } from "react-router-dom"
import logements from '../../data/logements.json'

import Gallery from "../../components/Gallery/Gallery.jsx";


function Location() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id)

    if (!logement) {
        return <main>L'annonce n'existe pas</main>;
    }

    return (
        <main className="location">
            <Gallery className="location__gallery" images={logement.pictures} />
            
                <h2>{logement.title} 🏡</h2>
                <p>{logement.location}</p>
            </div|
        </main>
    )
}

export default Location