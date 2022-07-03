import React from 'react';
// import Link from 'next/link';

import { urlFor } from '../Client';

const Product = ({product}) => {

  return (
    <div>
      {/* <Link href={`/product/${slug.current}`}> */}
        <div className="product-card">
          <img 
            src={urlFor(product.image)}
            width={250}
            height={250}
            className="product-image"
            alt = {product.name}
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default Product