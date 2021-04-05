import { useParams } from "react-router";
import BarDetails from "./BarDetails";
import CompleteDetails from "./CompleteDetails";
import DeckDetails from "./DeckDetails";
import useDetails from "./useDetails";
import WheelDetails from "./WheelDetails";
import "../productDetails/productDetails.css";

const ProductDetails = () => {
    const {id, category} = useParams()
    const details = useDetails();

    return (
        <div>
            {details.category === "komplette" &&
                <CompleteDetails />
            }
            {details.category === "decks" &&
                <DeckDetails />
            }
            {details.category === "bars" &&
                <BarDetails />
            }
            {details.category === "hjul" &&
                <WheelDetails />
            }
        </div>
    )
}

export default ProductDetails;