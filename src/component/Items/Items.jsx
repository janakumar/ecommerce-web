import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
export const Items = (props) => {
  return (
    <div className="item">
        <div className="item-img">
          <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link> 
            <p>{props.name}</p>
        </div>
        <div className="price">
            <div className="new-price">
                ${props.new_price}
            </div>
            <div className="old-price">
                 ${props.old_price}
            </div>
        </div>
    </div>
  )
}
