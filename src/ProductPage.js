import React, {useEffect} from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { urlFor } from './Client';
import { useStateContext } from './context/StateContext';

const ProductPage = () => {

const {products} = useStateContext();
// console.log(products)



    let params = useParams();
    console.log(params)


    let getproduct = (productId) => {
        return products.find((product) => product.name === productId)
    }   

    let product = getproduct(params.name)
    console.log(product)
    

  return (
    // <div><div>
    <div className='product-detail-container'>
        <div>
            <div className='image-container'>
                <img src = {product? urlFor(product.image) : ''} className="product-detail-image" alt=''/>
            </div>
        </div>
        <div className='product-detail-desc'>
          <h1>{product? product.name : ''}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details</h4>
          <p>{product? product.details : ''}</p>
          <p className='price'>${product? product.price : ''}</p>
          <div className='quantity'>
            <h3>Quantity</h3>
            <p className='quantity-desc'>
              <span className='minus' ><AiOutlineMinus/></span>
              <span className='num' >0</span>
              <span className='plus' ><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button'
              className='add-to-cart'
              >
                Add to Cart
              </button>
            <button type='button'
              className='buy-now'
              >
                Buy Now
              </button>
              {/* <FlutterWave /> */}
          </div>
        </div>
    </div>
  )
}

export default ProductPage