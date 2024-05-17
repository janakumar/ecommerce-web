import React, { useState } from 'react';
import './Nav.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';


export const Nav = () => {
  const [menu, setMenu] = useState("SHOP");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("SHOP") }}><Link style={{textDecoration:'none',color:'black'}} to ='/'>SHOP</Link>{menu === "SHOP" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("MEN") }}> <Link style={{textDecoration:'none',color:'black'}} to ='/MENS'>MEN</Link>{menu === "MEN" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("WOMEN") }}><Link style={{textDecoration:'none',color:'black'}} to ='/WOMENS'>WOMEN</Link>{menu === "WOMEN" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("KIDS") }}><Link style={{textDecoration:'none',color:'black'}} to ='/KIDS'>KIDS</Link> {menu === "KIDS" ? <hr /> : <></>}</li>
      </ul>
      <div className="login">
         <Link to='/LOGIN'><button>LOGIN</button></Link>
         <Link to='/CART'><img src={cart} alt="" /></Link>
        
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Nav;
