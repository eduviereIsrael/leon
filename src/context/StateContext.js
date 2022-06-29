import React,{ createContext, useContext, useState, useEffect} from 'react';
import axios from "axios";



const Context = createContext();


export const StateContext = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const options = {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/product',
        params: {categoryID: 'aps', keyword: 'speakers', country: 'US', page: '1'},
        headers: {
            'X-RapidAPI-Key': '8d12984908msha66b10a3c4c3d82p1f4ed3jsna734e71f6d1e',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
        };

        // const data = async function () {
        //     await axios.request(options)
        //     .then((response) => {
        //         setProducts(response.data.docs);
        //     }).catch(function (error) {
        //         console.error(error);
        //     });
        //     return products
        // }
        // data ();
        
        axios.request(options)
        .then(async function (response) {
            await response.data;
            setProducts(response.data.docs);
        }).catch(function (error) {
            console.error(error);
        });
            
        

        
    
    },[])

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