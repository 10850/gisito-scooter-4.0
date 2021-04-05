import { useAuth } from "../auth/AuthContext";
import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../../firebase/firebase';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([])
    
    function addToCart(id, category, product_name, product_img, price) {
        return firebase.auth().onAuthStateChanged((user) => {
            return db.collection("users").doc(user.uid).collection("shoppingCart").doc(id).set(
                    {
                        id: id,
                        category: category,
                        product_name: product_name,
                        product_img: product_img,
                        price: price
                    
                    })
        })
    }

    useEffect(async () => {
        firebase.auth().onAuthStateChanged( async (user) => {
            const userCollection = await db.collection("users").doc(user.uid).collection("shoppingCart").get()
            const userCart = userCollection.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setShoppingCart(userCart)
        })
            console.log(shoppingCart)         
    }, [])


    const value = {
        addToCart,
        shoppingCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;