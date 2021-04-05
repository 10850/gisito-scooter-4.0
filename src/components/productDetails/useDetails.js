import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../firebase/ProductsContext";

const useDetails = () => {
    const { category, id } = useParams()
    const { completes, decks, wheels, bars } = useContext(ProductsContext)
    const [details, setDetails] = useState({});

    useEffect( async () => {
        if (category === "komplette") {
            const product = await completes.find((complete)=> complete.id === id);
            console.log(product)
            await setDetails(product)
            console.log(details)
        }

        if (category === "decks") {
            const product = await decks.find((deck)=> deck.id === id);
            console.log(product)
            await setDetails(product)
            console.log(details)
        }

        if (category === "bars") {
            const product = await bars.find((bar)=> bar.id === id);
            console.log(product)
            await setDetails(product)
            console.log(details)
        }

        if (category === "hjul") {
            const product = await wheels.find((wheel)=> wheel.id === id);
            console.log(product)
            await setDetails(product)
            console.log(details)
        } 
    },[id])

        return details;
    
    
}

export default useDetails;