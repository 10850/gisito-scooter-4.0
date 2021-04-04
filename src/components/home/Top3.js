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
                        <Link to={`/produkt/${complete.completeData.category}/${complete.id}`}>
                            <li key={complete.id}>
                                <img src={complete.files.product_img} />
                                <h3>
                                    {complete.completeData.product_name}
                                </h3>
                                <p>
                                    {complete.completeData.price + " kr"}
                                </p>
                            </li>
                        </Link>
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
                        <Link to={`/produkt/${deck.deckData.category}/${deck.id}`}>
                            <li key={deck.id}>
                                <img src={deck.files.product_img} />
                                <h3>
                                    {deck.deckData.product_name}
                                </h3>
                                <p>
                                    {deck.deckData.price + " kr"}
                                </p>
                            </li>
                        </Link>
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
                        <Link to={`/produkt/${wheel.wheelData.category}/${wheel.id}`}>
                            <li key={wheel.id}>
                                <img src={wheel.files.product_img} />
                                <h3>
                                    {wheel.wheelData.product_name}
                                </h3>
                                <p>
                                    {wheel.wheelData.price + " kr"}
                                </p>
                            </li>
                        </Link>
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
                        <Link to={`/produkt/${bar.barData.category}/${bar.id}`}>
                            <li key={bar.id}>
                                <img src={bar.files.product_img} />
                                <h3>
                                    {bar.barData.product_name}
                                </h3>
                                <p>
                                    {bar.barData.price + " kr"}
                                </p>
                            </li>
                        </Link>
                    ))
                        
                    }
                </ul>
            </section>
        </section>
    )
}

export default Top3;