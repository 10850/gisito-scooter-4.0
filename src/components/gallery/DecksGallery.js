import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../firebase/ProductsContext";
import "./gallery.css";

const DecksGallery = () => {
    const { decks } = useContext(ProductsContext);

    return (
        <section className="gallery-component-container">
            <section className="filters-section">

            </section>
            <section className="gallery-section">
                <ul>
                    {decks.map((deck) => (
                        
                            <li key={deck.id}>
                                <Link to={`/produkt/${deck.category}/${deck.id}`}>
                                <img src={deck.product_img} />
                                <div>
                                    <h3>
                                        {deck.product_name}
                                    </h3>
                                    <p className="pris">
                                        {deck.price + " kr"}
                                    </p>
                                    <p className="size">
                                        {"Længde: " + deck.deck_length + "cm"}
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

export default DecksGallery;