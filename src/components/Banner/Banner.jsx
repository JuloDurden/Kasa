import './Banner.scss'
import FadeInOnLoad from '../FadeIn/FadeIn'

function Banner({ image, text, darken = true }) {
  return (
    <div className="banner">
      <img
        src={image}
        alt="Bannière header"
        className={`banner__img ${text && darken ? 'banner__img--darken' : ''}`}
      />
      {text && (
        <div className="banner__text-wrapper">
          <FadeInOnLoad className="banner__text">
            {text}
          </FadeInOnLoad>
        </div>
      )}
    </div>
  )
}

export default Banner
