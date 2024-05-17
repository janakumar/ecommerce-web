import React from 'react'
import './Banner.css'
import exclusive from '../Assets/exclusive_image.png'

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-left">
                <h1>EXCLUSIVE</h1>
                <h1>OFFERS FOR YOU</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <div className="check-now">
                    <button>Check Now  &rarr;</button>
                </div>

            </div>
            <div className="banner-right">
                <img src={exclusive} alt="" />
            </div>
        </div>
    )
}
