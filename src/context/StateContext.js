import React,{ createContext, useContext, useState, useEffect} from 'react';
// import axios from "axios";
import { client } from '../Client';



const Context = createContext();


export const StateContext = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "product"]'
    
        client.fetch(query)
          .then((data) => {
            // console.log(data)
            setProducts(data)
          })
      }, [])

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);