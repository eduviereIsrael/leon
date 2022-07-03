import React from 'react'
import { FooterBanner, HeroBanner, Loader } from './Componenets';
import {useStateContext} from './context/StateContext';
import { urlFor } from './Client'
import { Link } from 'react-router-dom'


const MainApp = () => {

  
  

    const {products} = useStateContext();

    // console.log(products[16])
    
  return (
    <div>
      <HeroBanner product = {products[6]} />
        {/* display a loader before the product is fetched, use this format in any page where product is being fetched */}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p className='item-desc bottom'>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products.length > 1? products.map((product) => (
          <Link to={`/product/${product.name}`} key = {product._id}>
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
          </Link>
            
        )) : 
        <Loader />}
      </div>
        
      <FooterBanner product = {products[5]} />
    </div>
  )
}

export default MainApp
