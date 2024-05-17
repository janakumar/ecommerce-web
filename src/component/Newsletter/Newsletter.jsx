import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>GET EXCLUSIVE OFFER ON YOUR E-MAIL</h1>
        <p>subcribe to our news letter and stay tuned</p>
        <div className="input">
            <input type="text" placeholder='Your E-mail Id' />
            <button>Subcribe</button>
        </div>
    </div>
  )
}
