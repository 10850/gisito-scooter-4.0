import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../firebase/ProductsContext";
import "./gallery.css";

const BarsGallery = () => {
    const { bars } = useContext(ProductsContext);

    return (
        <section className="gallery-component-container">
            <section className="filters-section">

            </section>
            <section className="gallery-section">
                <ul>
                    {bars.map((bar) => (
                        
                            <li key={bar.id}>
                                <Link to={`/produkt/${bar.category}/${bar.id}`}>
                                <img src={bar.product_img} />
                                <div>
                                    <h3>
                                        {bar.product_name}
                                    </h3>
                                    <p className="pris">
                                        {bar.price + " kr"}
                                    </p>
                                    <p className="size">
                                        {"Højde: " + bar.bar_height + "mm"}
                                    </p>
                                </div>
                                </Link>
                            </li>
                        
                    ))

                    }
                </ul>
            </section>
        </section>  
    )        
}

export default BarsGallery;