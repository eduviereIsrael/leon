import React,{ createContext, useContext, useState, useEffect} from 'react';
// import axios from "axios";
import { client } from '../Client';
import  { toast } from 'react-hot-toast';




const Context = createContext();


export const StateContext = ({children}) => {
    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        const query = '*[_type == "product"]'
    
        client.fetch(query)
          .then((data) => {
            // console.log(data)
            setProducts(data)
          })
      }, [])
    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {

        // check if a product is already in cart
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        // set the new total price and quantity
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity )

        if(checkProductInCart) {
            
            // if the product already is in cart map the cartItems array and if any of the cart items products id matched the id of the product to be added
            // then spread that cart product and only update the state by adding the quantity provided to the previous quantity of the product.
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
        // if the product wasn't found among the cartitems then update the product quantity to whatever is been provided as quantity(qty) at the time of the function call and concatenate (using the spread operator) the cart items with the product supplied as parameter to the function and set that as the new value for cart items
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, {...product}]);
        }

        toast.success(`${qty} ${product.name} has been added to the cart`);
    }
    const onRemove = (product) => {
        // first we check if the product is in the cart
        foundProduct = cartItems.find((item) => item._id === product._id)

        // then we define a function that filters for all the products in the cart that doesn't have an id equal to the id of the product supplied to the onRemove function as a parameter
        const newCartItems = cartItems.filter((item) => item._id !== product._id)

        // we procedd to set total price to the previous price minus the foundProduct's price multiplied by the quantity of the product in the cart.
        setTotalPrice((prevTotalprice) => prevTotalprice - foundProduct.price * foundProduct.quantity);

        // we also subtract the foundProduct's quantity from the total quantity.
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);

        // we set cart items to the array of products whose id didn't match that of the product supplied as a parameter
        setCartItems(newCartItems);
    }
    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)
        const newCartItems = cartItems.filter((item) => item._id !== id)

        if(value === 'inc') {
            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity +
                1}])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        } else if (value === 'dec') {

            if(foundProduct.quantity > 1) {

            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity -
                1}])
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
            } else {
                setTotalPrice((prevTotalPrice) => prevTotalPrice - 0)
            }
        }
    }
    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1
            
            return prevQty - 1;
        })
    }

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                showCart,
                setShowCart,
                cartItems,
                setCartItems,
                totalPrice,
                setTotalPrice,
                totalQuantities,
                setTotalQuantities,
                qty,
                setQty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);