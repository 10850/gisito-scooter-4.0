import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../firebase/ProductsContext";
import "./gallery.css";

const WheelsGallery = () => {
    const { wheels } = useContext(ProductsContext);

    return (
        <section className="gallery-component-container">
            <section className="filters-section">
 
            </section>
            <section className="gallery-section">
                <ul>
                    {wheels.map((wheel) => (
                        
                            <li key={wheel.id}>
                                <Link to={`/produkt/${wheel.category}/${wheel.id}`}>
                                <img src={wheel.product_img} />
                                <div>
                                    <h3>
                                        {wheel.product_name}
                                    </h3>
                                    <p className="pris">
                                        {wheel.price + " kr"}
                                    </p>
                                    <p className="size">
                                        {"Diameter: " + wheel.wheel_diameter + "mm"}
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

export default WheelsGallery;