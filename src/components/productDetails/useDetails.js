import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../firebase/ProductsContext";

const useDetails = () => {
    const { category, id } = useParams()
    const { completes, decks, wheels, bars } = useContext(ProductsContext)
    const [details, setDetails] = useState([]);

    useEffect( async () => {
        await fetchDetails()
    },[id])

    function fetchDetails() {
        if (category === "komplette") {
            const product = completes.find((complete)=> complete.id === id);
            console.log(product)
            setDetails(product)
            console.log(details)
        }

        if (category === "decks") {
            const product = decks.find((deck)=> deck.id === id);
            console.log(product)
            setDetails(product)
            console.log(details)
        }

        if (category === "bars") {
            const product = bars.find((bar)=> bar.id === id);
            console.log(product)
            setDetails(product)
            console.log(details)
        }

        if (category === "hjul") {
            const product = wheels.find((wheel)=> wheel.id === id);
            console.log(product)
            setDetails(product)
            console.log(details)
        }  

        return details;
    }
    
}

export default useDetails;