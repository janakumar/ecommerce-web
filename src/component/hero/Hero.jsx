import React from 'react'
import'./Hero.css'
import hand_icon from'../Assets/hand_icon.png'
import hero_image from'../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h4>NEW ARRIVALS ONLY</h4>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="latest">
              <button>Latest Collection  &rarr;</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={hero_image} alt="" />
          </div>




    </div>
  )
}
