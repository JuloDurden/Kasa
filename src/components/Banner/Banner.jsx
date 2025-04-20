import './Banner.scss'

function Banner({ image, text, darken = true}) {
  return (
    <div className="banner">
      <img src={image} alt="" className={`banner__img" ${text && darken ? 'banner__img--darken' : ''}`} />
      {text && <p className="banner__text">{text}</p>}
    </div>
  )
}

export default Banner
