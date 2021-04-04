import { useParams } from "react-router";
import useDetails from "./useDetails";

const ProductDetails = () => {
    const {id, category} = useParams()
    const details = useDetails();

    return (
        <div>

        </div>
    )
}

export default ProductDetails;