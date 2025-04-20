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
        <main>
            <Gallery images={logement.pictures} />
            <h2>{logement.title} 🏡</h2>
        </main>
    )
}

export default Location