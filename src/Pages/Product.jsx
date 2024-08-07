import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionnBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/Relatedproducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {ProductId}=useParams();
  console.log(ProductId);
  const product = all_product.find((e)=>e.id===Number(ProductId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionnBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
