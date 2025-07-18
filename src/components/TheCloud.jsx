import cloud from '../assets/cloud1.png'
import rain from '../assets/rain.png'
import sun from '../assets/sun.png'
import lightning from '../assets/lightning.png'
import snow from '../assets/snow.png'
import '../styles/TheCloud.css'

function TheCloud({ mood }) {
  const generateRandomRainDrops = () => {
    return Array.from({ length: 12 }, (_, idx) => ({
      id: idx,
      left: Math.random() * 85 + 5, // Random position between 5% and 90%
      delay: Math.random() * 2, // Random delay between 0 and 2 seconds
      duration: 0.8 + Math.random() * 0.6, // Random duration between 0.8s and 1.4s
      opacity: 0.4 + Math.random() * 0.4, // Random opacity between 0.4 and 0.8
      scale: 0.7 + Math.random() * 0.6, // Random scale between 0.7 and 1.3
    }))
  }

  const generateRandomSnowFlakes = () => {
    return Array.from({ length: 15 }, (_, idx) => ({
      id: idx,
      left: Math.random() * 85 + 5, // Random position between 5% and 90%
      delay: Math.random() * 3, // Random delay between 0 and 3 seconds
      duration: 2 + Math.random() * 1, // Random duration between 2s and 3s (slower than rain)
      opacity: 0.6 + Math.random() * 0.4, // Random opacity between 0.6 and 1.0
      scale: 0.02 + Math.random() * 0.04, // Random scale between 0.02 and 0.06 (even smaller)
    }))
  }

  return (
    <div className={`cloud-container ${mood === 'sun' ? 'sun-mood' : ''} ${mood === 'lightning' ? 'lightning-mood' : ''} ${mood === 'rainbow' ? 'rainbow-mood' : ''} ${mood === 'fog' ? 'fog-mood' : ''}`}>
      {mood === 'sun' && (
        <img 
          src={sun} 
          alt="sun" 
          className="sun-animation"
        />
      )}
      {mood === 'lightning' && (
        <img 
          src={lightning} 
          alt="lightning" 
          className="lightning-animation"
        />
      )}
      {mood === 'fog' && (
        <div className="fog-overlay"></div>
      )}
      <img
        src={cloud}
        alt="cloud"
        className={`cloud-img ${mood === 'wind' ? 'wind-cloud' : ''}`}
      />
      {mood === 'rain' && (
        <div className="rain-wrapper">
          {generateRandomRainDrops().map((drop) => (
            <img
              key={drop.id}
              src={rain}
              alt="rain"
              className="rain-overlay"
              style={{
                left: `${drop.left}%`,
                animationDelay: `${drop.delay}s`,
                animationDuration: `${drop.duration}s`,
                opacity: drop.opacity,
                transform: `scale(${drop.scale})`,
              }}
            />
          ))}
        </div>
      )}
      {mood === 'snow' && (
        <div className="snow-wrapper">
          {generateRandomSnowFlakes().map((flake) => (
            <img
              key={flake.id}
              src={snow}
              alt="snow"
              className="snow-overlay"
              style={{
                left: `${flake.left}%`,
                animationDelay: `${flake.delay}s`,
                animationDuration: `${flake.duration}s`,
                opacity: flake.opacity,
                transform: `scale(${flake.scale})`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TheCloud