import React from 'react';
// import {Link} from 'react-router-dom';
// import { urlFor } from '../lib/client'
import { urlFor } from '../Client';

const HeroBanner = ({product}) => {
  // console.log(product)
  return (
    <div>
      {product? 
      <div className='hero-banner-container'>
      <div className = 'banner-intro'>
        <h1>SUMMER SALE</h1>
        <h3>{product.name}</h3>
        <button type="button">buy now</button>

       
      </div>
      <div className='banner-img'>
        <img src = {urlFor(product.image)} alt="headphones" className='hero-banner-image' />
      </div>


      <div className='desc'>
        <h5>Description</h5>
        <p>{product.details}</p>
      </div>

    </div> : <h1>Hello</h1>
    }
    </div>

    // <div>
    //   {product? 
    //   <img src={urlFor(product.image[0]).url()} alt="" /> : 
    //   <p>hello</p>
    //   }
    // </div>
    
  )
}

export default HeroBanner