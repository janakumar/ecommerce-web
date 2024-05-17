import React,{useContext} from 'react'
import { shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../component/Breadcrum/Breadcrum';
import { Shopdisplay } from '../component/Shopdisplay/Shopdisplay';

export const Product = () => {
  const { all_product } = useContext(shopcontext);
  const{productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>

      <Breadcrum product={product}/>
      <Shopdisplay product={product}/>
    </div>
  )
}
