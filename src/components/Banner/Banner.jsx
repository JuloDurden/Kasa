import './Banner.scss'

function Banner({ image, text, darken = true, large = false }) {
  return (
    <div className={`banner ${large ? 'banner--large' : ''}`}>
      <img src={image} alt="" className={`banner__img" ${text && darken ? 'banner__img--darken' : ''}`} />
      {text && <p className="banner__text">{text}</p>}
    </div>
  )
}

export default Banner
