import React from 'react'
import {Link} from 'react-router-dom'

// import { urlFor } from '../lib/client'

const FooterBanner = ({product}) => {
  // console.log(product)
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          {/* <p>{discount}</p> */}
          {/* <h3>{product? product.product_title : 'loading'}</h3> */}
          {/* <p>{saleTime}</p> */}
        </div>
        <div className='footer-img'>
          {/* <img src={product ? product.product_main_image_url : ''} alt="" /> */}
        </div>
        <div className="right">
          {/* <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <button type="bitton">{buttonText}</button>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default FooterBanner