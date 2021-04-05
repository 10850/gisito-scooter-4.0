import { useParams } from "react-router";
import useDetails from "./useDetails";
import "../productDetails/productDetails.css";
import { useContext } from "react";
import { CartContext } from "../cart/CartContext";

const WheelDetails = () => {
    const {id, category} = useParams()
    const details = useDetails();
    const { addToCart } = useContext(CartContext)

    async function handleAdd() {
        try {
            await addToCart(details.id, details.category, details.product_name, details.product_img, details.price)
        } catch {
            console.log('error')
        }
    }

    return (
        <section className="details-page">
            <section className="details-product-options">
                <img className="product-image" src={details.product_img} />
                <img className="brand-logo" src={details.brand} />
                <h1>
                    {details.product_name + " Løbehjul"}
                </h1>
                <p>
                    {details.price + " kr"}
                </p>
                <div className="details-buttons">
                    <button className="cart-btn" onClick={handleAdd} >
                        LÆG I KURV
                    </button>
                    <button className="buynow-btn">
                        KØB NU
                    </button>
                </div>
            </section>
            <section className="details-product-description">
                <h2>
                    BESKRIVELSE
                </h2>
                <p>
                    {details.description}
                </p>
                <h3>
                    Tech feature
                </h3>
                <ul>
                    <li>
                        {details.tech_feature}
                    </li>
                </ul>
            </section>
            <section className="details-product-specs">
                <div className="table">
                    <div className="table-column-1">
                        <div className="table-row">
                            <div className="table-td">
                                Hjuldiameter:
                            </div>
                            <div className="table-td">
                                {details.wheel_diameter}
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-td">
                                Hjul nav bredde:
                            </div>
                            <div className="table-td">
                                {details.wheel_width}
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-td">
                                Hjul hårdhed:
                            </div>
                            <div className="table-td">
                                {details.wheel_hardness}
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-td">
                                Hjul pr. pakke:
                            </div>
                            <div className="table-td">
                                {details.wheels_pr_pack}
                            </div>
                        </div>
                    </div>
                    <div className="table-column-2">
                        <div className="table-row">
                            <div className="table-td">
                                Vægt:
                            </div>
                            <div className="table-td">
                                {details.weight}
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-td">
                                Kerne design:
                            </div>
                            <div className="table-td">
                                {details.core_design}
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-td">
                                Aksel diameter:
                            </div>
                            <div className="table-td">
                                {details.aksel}
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-td">
                                Kuglelejer:
                            </div>
                            <div className="table-td">
                                {details.bearings}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default WheelDetails;