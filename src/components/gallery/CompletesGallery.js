import { useContext } from "react";
import { ProductsContext } from "../../firebase/ProductsContext";
import { Link } from "react-router-dom";
import "./gallery.css";

const CompleteGallery = () => {
    const { completes } = useContext(ProductsContext);


    return (
        <section className="gallery-component-container">
            <section className="filters-section">

            </section>
            <section className="gallery-section">
                <ul>
                    {completes.map((complete) => (
                        
                            <li key={complete.id}>
                                <Link to={`/produkt/${complete.category}/${complete.id}`}>
                                <img src={complete.product_img} />
                                <div>
                                    <h3>
                                        {complete.product_name}
                                    </h3>
                                    <p className="pris">
                                        {complete.price + " kr"}
                                    </p>
                                    <p className="size">
                                        {"Total højde: " + complete.total_height + "cm"}
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

export default CompleteGallery;