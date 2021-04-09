import { useAuth } from "../auth/AuthContext";
import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../../firebase/firebase';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([])
    const [loading, setLoading] = useState(true)
    const { userUid, currentUser } = useAuth();

    const addToCart = async (id, category, product_name, product_img, price) => {
        console.log("start add")
             await db.collection("users").doc(userUid.uid).collection("shoppingCart").doc(id).set(
                    {
                        id: id,
                        category: category,
                        product_name: product_name,
                        product_img: product_img,
                        price: price
                    
                    })
                    .then(async()=> {
                        setLoading(false)
                    })
        console.log("slut add")

    }

    const removeFromCart = async (id) => {
        console.log("start delete")
            
            db.collection("users").doc(userUid.uid).collection("shoppingCart").doc(id).delete(id)
            .then(()=>{
                console.log("Document successfully deleted!");
                setLoading(false)
            })
        console.log("slut delete");
    }

    const updateCart = async (user) => {
            console.log("start update")
            const collection = await db.collection("users").doc(user).collection("shoppingCart").get()
            const cart = collection.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            console.log(cart)
            console.log("slut update")

            return cart;
                
    }

    useEffect(async() => {
        console.log("start useEffect")
        console.log(userUid)
        setShoppingCart(await updateCart(userUid.uid))
        console.log(shoppingCart)
        console.log("slut useEffect") 
        setLoading(true)  
    },[loading])
    
   
    const value = {
        addToCart,
        removeFromCart,
        shoppingCart,
        setShoppingCart
    }

    return (
        <CartContext.Provider value={value}>
            {loading && children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;