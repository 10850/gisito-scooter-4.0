import { db } from '../firebase/firebase';
import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [completes, setCompletes] = useState([])
    const [decks, setDecks] = useState([])
    const [bars, setBars] = useState([])
    const [wheels, setWheels] = useState([])

    const getCollectionData = async (collectionName) => {
        const collection = await db.collection(collectionName).get()
        const products = collection.docs.map((doc) => ({id: doc.id, ...doc.data()}))

        return products;
        
    }

    useEffect(async () => {
        setCompletes(await getCollectionData("completes"));
        setDecks(await getCollectionData("decks"))
        setBars(await getCollectionData("bars"))
        setWheels(await getCollectionData("wheels"))
        console.log("slut")
    }, [])

    return (
        <ProductsContext.Provider value={{completes, decks, bars, wheels}} >
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;