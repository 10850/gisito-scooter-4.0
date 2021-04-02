import { useState } from "react";
import { db } from "../../firebase/firebase";
import useStorage from "../../firebase/useStorage";
import "../forms/addproduct.css";

const AddDeck = () => {
    const [deckData, setDeckData] = useState([])
    const [file, setFile] = useState([])
    const [error, setError] = useState(null)
    const { url } = useStorage(file);
    

    const dataChange = (e) => {
        if (e.target.type === "number") {
            console.log("number")
            setDeckData({
              [e.target.name]: parseInt(e.target.value)
            }) 
        } else {
            setDeckData({...deckData, [e.target.name]: e.target.value})
        }
    }

    const brandChange = async (e) => {
        let selectedBrand = e.target.files[0];
        let name = e.target.name;

        if (selectedBrand) {
          await setFile({...file, [name]: selectedBrand});
          setFile({...file, [name]: url})
          console.log(file)
          setError('');
        } 
        
    };

    const productChange = async (e) => {
        let selectedProduct = e.target.files[0];
        let name = e.target.name;

        if (selectedProduct) {
          await setFile({...file, [name]: selectedProduct});
          setFile({...file, [name]: url})
          console.log(file)
          setError('');
        }
    };


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(file)
        
        db.collection("decks").add({
            deckData,
            file
        })
    }


    return (
        <>
            <h3>
                Tilføj Deck
            </h3>
            <form className="product-form" onSubmit={handleSubmit}>
                <label>
                    Kategori
                </label>
                <input name="category" type="text" placeholder="bars" onChange={dataChange} />

                <label>
                    Brand logo
                </label>
                <input name="brand" type="file" onChange={brandChange} />

                <label>
                    Produktnavn
                </label>
                <input name="product_name" type="text" onChange={dataChange} />

                <label>
                    Pris
                </label>
                <input name="price" type="number" step="any" onChange={dataChange} />

                <label>
                    Produktbilled
                </label>
                <input name="product_img" type="file" onChange={productChange} />

                <label>
                    Beskrivelse
                </label>
                <textarea name="description" className="description" onChange={dataChange}>

                </textarea>

                <label>
                    Tech features
                </label>
                <textarea name="tech_feature" className="tech-feature" onChange={dataChange}>
                    
                </textarea>

                <label>
                    Deck bredde
                </label>
                <input name="deck_width" type="number" step="any" onChange={dataChange} />

                <label>
                    Deck Længde
                </label>
                <input name="deck_width" type="number" step="any" onChange={dataChange} />

                <label>
                    Hjuldiameter
                </label>
                <input name="wheel_diameter" type="number" step="any" onChange={dataChange} />

                <label>
                    Hjul nav bredde
                </label>
                <input name="wheel_nav_width" type="number" step="any" onChange={dataChange} />

                <label>
                    Vægt
                </label>
                <input name="weight" type="number" step="any" onChange={dataChange} />
                    
                <label>
                    Headtube vinkel
                </label>
                <input name="headtube_angle" type="number" step="any" onChange={dataChange} />

                <label>
                    Headtube længde
                </label>
                <input name="headtube_length" type="number" step="any" onChange={dataChange} />

                <label>
                    Deck spacers
                </label>
                <input name="deck_spacers" type="text" onChange={dataChange} />

                <label>
                    Bremse/Fender
                </label>
                <input name="brake" type="text" onChange={dataChange} />

                <label>
                    Bremse monteringbolt
                </label>
                <input name="brake_bolt" type="text" onChange={dataChange} />

                <label>
                    Aksel diameter
                </label>
                <input name="aksel" type="number" step="any" onChange={dataChange} />

                <label>
                    Griptape
                </label>
                <input name="griptape" type="text" onChange={dataChange} />

                <button type="submit">
                    Tilføj
                </button>
            </form>
        </>   
    )
}

export default AddDeck;