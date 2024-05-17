import React from 'react'
import './Shopdisplay.css'
import  star from '../Assets/star_icon.png'
import dullstar from '../Assets/star_dull_icon.png'

export const Shopdisplay = (props) => {
    const{product}=props;
  return (
    <div className="product-display">
        <div className="left-product">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="right-product">
            <img src={product.image} alt="" />
        </div>
        <div className="product-content">
            <div className="name">
                <h1>{product.name}</h1>
            </div>
            <div className="quality">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={dullstar} alt="" />
                n
            </div>
            <div className="price">
                <p>${product.old_price}</p>
                ${product.new_price}
            </div>
            <div className="desc">
                <p>a lightweight,usually knitted,pullover shirt,close fitting a round neckline<br></br>and ahort sleeveless,worn as an undershirt orouter garment</p>
            </div>
            <div className="size">
                <h4>Select Size</h4>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
            </div>
            <div className="cart">
                <button>ADD TO CART</button>
            </div>
            <div className="category">
                <h5>category:Women,T-shirt,Crop Top</h5>
                <h5>Tags:Modern,Latest</h5>
            </div>
        </div>
        
    </div>
  )
}

