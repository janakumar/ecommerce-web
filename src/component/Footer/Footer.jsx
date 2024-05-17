import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatapp from '../Assets/whatsapp_icon.png'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="shopper">
                <img src={logo} alt="" />
                <h1>SHOPPER</h1>
            </div>
            <ul className='link'>
                <li>Company</li>
                <li>Product</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social">
                <img src={instagram} alt="" />
                <img src={pintester} alt="" />
                <img src={whatapp} alt="" />
            </div>
        </div>
    )
}
