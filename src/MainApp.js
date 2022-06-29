import React from 'react'
import { Loader } from './Componenets';
import {useStateContext} from './context/StateContext'

const MainApp = () => {

    const {products} = useStateContext();

    console.log(products)
    
  return (
    <div>
        {products.length > 1? products.map((product) => (
            <h1>{product.product_title}w</h1>
        )) : 
        <Loader />
        }
    </div>
  )
}

export default MainApp