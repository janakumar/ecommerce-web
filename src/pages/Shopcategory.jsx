import React, { useContext } from 'react'
import { shopcontext } from '../context/Shopcontext'
import './css/Shopcatergory.css'
import dropdown from '../component/Assets/dropdown_icon.png'
import { Items } from '../component/Items/Items'


export const Shopcategory = (props) => {
  const { all_product } = useContext(shopcontext)
  return (
    <div className="shop-category">
      <img className="ban" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1 to 12 </span> out of 36 products
        </p>
        <div className="sort">
          <button>sort by🔻</button>
        </div>

      </div>
      <div className="products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }

        })}
      </div>

    </div>
  )
}
