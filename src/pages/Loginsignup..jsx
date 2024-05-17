import React from 'react'
import './css/Loginsignup.css'

export const Loginsignup = () => {
  return (
    <div className="login-signup">
      <div className="loginsignup-cointainer">
        <h1>sign up</h1>
        <div className="field">
          <input type="text" placeholder='YOUR NAME' />
          <input type="text" placeholder='EMAIL ADDRESS' />
          <input type="text" placeholder='PASSWORD' />
        </div>
        <div className="click">
          <button>CONTINUE</button>
          <div className="account">
            <p>already having an account? <span>Login Here</span></p>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>By,Continuing I agree to the terms of use &privacy policy.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

