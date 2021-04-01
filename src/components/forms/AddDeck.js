import { useState } from "react";
import "../forms/addproduct.css";

const AddDeck = () => {
    /* const [deckData, setDeckData] = useState([])
    const [file, setFile] = useState([])

    setDeckData({[e.target.name]: e.target.value})
    setFile({[e.target.name]: e.target.files}) */

    return (
        <>
            <h3>
                Tilføj Deck
            </h3>
            <form className="product-form">
                <label>
                    Kategori
                </label>
                <input type="text" placeholder="bars" />

                <label>
                    Brand logo
                </label>
                <input type="file" />

                <label>
                    Produktnavn
                </label>
                <input type="text" />

                <label>
                    Pris
                </label>
                <input type="number" step="any" />

                <label>
                    Produktbilled
                </label>
                <input type="file" />

                <label>
                    Beskrivelse
                </label>
                <textarea className="description">

                </textarea>

                <label>
                    Tech features
                </label>
                <textarea className="tech-feature">
                    
                </textarea>

                <label>
                    Deck bredde
                </label>
                <input type="number" step="any" />

                <label>
                    Deck Længde
                </label>
                <input type="number" step="any" />

                <label>
                    Hjuldiameter
                </label>
                <input type="number" step="any" />

                <label>
                    Hjul nav bredde
                </label>
                <input type="number" step="any" />

                <label>
                    Vægt
                </label>
                <input type="number" step="any" />
                    
                <label>
                    Headtube vinkel
                </label>
                <input type="number" step="any" />

                <label>
                    Headtube længde
                </label>
                <input type="number" step="any" />

                <label>
                    Deck spacers
                </label>
                <input type="text" />

                <label>
                    Bremse/Fender
                </label>
                <input type="text" />

                <label>
                    Bremse monteringbolt
                </label>
                <input type="text" />

                <label>
                    Aksel diameter
                </label>
                <input type="number" step="any" />

                <label>
                    Griptape
                </label>
                <input type="text" />

                <button>
                    Tilføj
                </button>
            </form>
        </>   
    )
}

export default AddDeck;