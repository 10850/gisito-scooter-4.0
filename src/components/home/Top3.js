import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../firebase/ProductsContext";
import "../home/home.css";

const Top3 = () => {
    const { completes, wheels, decks, bars } = useContext(ProductsContext);

    return (
        <section className="top3-section">
            <section className="top3-completes">
                <h2>
                    TOP 3 LØBEHJUL
                </h2>
                <div></div>
                <ul>
                    {completes.slice(0,3).map((complete) => (
                        
                            <li key={complete.id}>
                                <Link to={`/produkt/${complete.category}/${complete.id}`}>
                                <img src={complete.product_img} />
                                <h3>
                                    {complete.product_name}
                                </h3>
                                <p>
                                    {complete.price + " kr"}
                                </p>
                                </Link>
                            </li>
                        
                    ))

                    }
                </ul>
            </section>
            <section className="top3-decks">
                <h2>
                    TOP 3 DECKS
                </h2>
                <div></div>
                <ul>
                    {decks.slice(0,3).map((deck) => (
                        
                            <li key={deck.id}>
                                <Link to={`/produkt/${deck.category}/${deck.id}`}>
                                <img src={deck.product_img} />
                                <h3>
                                    {deck.product_name}
                                </h3>
                                <p>
                                    {deck.price + " kr"}
                                </p>
                                </Link>
                            </li>
                    ))
                        
                    }
                </ul>
            </section>
            <section className="top3-wheels">
                <h2>
                    TOP 3 HJUL
                </h2>
                <div></div>
                <ul>
                    {wheels.slice(0,3).map((wheel) => (
                        
                            <li key={wheel.id}>
                                <Link to={`/produkt/${wheel.category}/${wheel.id}`}>
                                <img src={wheel.product_img} />
                                <h3>
                                    {wheel.product_name}
                                </h3>
                                <p>
                                    {wheel.price + " kr"}
                                </p>
                                </Link>
                            </li>
                       
                    ))
                        
                    }
                </ul>
            </section>
            <section className="top3-bars">
                <h2>
                    TOP 3 BARS
                </h2>
                <div></div>
                <ul>
                    {bars.slice(0,3).map((bar) => (
                        
                            <li key={bar.id}>
                                <Link to={`/produkt/${bar.category}/${bar.id}`}>
                                <img src={bar.product_img} />
                                <h3>
                                    {bar.product_name}
                                </h3>
                                <p>
                                    {bar.price + " kr"}
                                </p>
                                </Link>
                            </li>
                        
                    ))
                        
                    }
                </ul>
            </section>
        </section>
    )
}

export default Top3;