import './Card.scss'

function Card({ image, text }) {
  return (
    <div className='card'>
      <img src={image} alt="" className="card__img" loading='lazy'/>
      <p className="card__text">{text}</p>
    </div>
  )
}

export default Card
